-- LiveCoach: shared state for the manager board and the coach's training.
-- Safe to run more than once. Supabase → SQL Editor → New query → Run.
-- Internal-team tool: the publishable/anon key may read and write. Do not expose the key publicly.

create table if not exists public.calls (
  id            text primary key,
  rep           text not null default 'ללא שם',
  mode          text,
  sim           boolean default false,
  status        text not null default 'live',      -- live | ended
  started_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  ended_at      timestamptz,
  duration_sec  integer default 0,
  stage         text,
  stage_idx     integer,
  stage_reached text,
  temperature   text,
  profile       text,
  customer_state text,
  say_now       text,
  ammo          jsonb default '[]'::jsonb,
  checks        jsonb default '{}'::jsonb,
  events        jsonb default '[]'::jsonb,        -- every coach action with reasoning + feedback + manager fix
  transcript    jsonb default '[]'::jsonb,
  insights      jsonb default '[]'::jsonb,
  open_barriers integer default 0,
  summary       text,
  summary_json  jsonb,
  score         integer,
  outcome       text,
  next_step     text
);
-- columns added over time (no-ops if they already exist)
alter table public.calls add column if not exists checks jsonb default '{}'::jsonb;
alter table public.calls add column if not exists events jsonb default '[]'::jsonb;
alter table public.calls add column if not exists sim boolean default false;

create index if not exists calls_started_at_idx on public.calls (started_at desc);
create index if not exists calls_updated_at_idx on public.calls (updated_at desc);

-- Manager training: notes the coach reads on every call, and corrections on disliked responses.
create table if not exists public.training (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  scope       text not null default 'general',   -- general | opening | kyc | pain | objection | goal | motive | solution | close | simulation | motivation
  text        text not null,
  source      text not null default 'manager',   -- manager | correction
  call_id     text,
  event_id    text,
  rep         text,
  context     text
);

-- Monthly targets per rep (set by the rep in "היום שלי").
create table if not exists public.reps (
  name        text not null,
  month       text not null,                     -- YYYY-MM
  target      integer default 0,
  achieved    integer default 0,
  updated_at  timestamptz default now(),
  primary key (name, month)
);

alter table public.calls    enable row level security;
alter table public.training enable row level security;
alter table public.reps     enable row level security;

drop policy if exists "team read"   on public.calls;
drop policy if exists "team write"  on public.calls;
drop policy if exists "team update" on public.calls;
create policy "team read"   on public.calls for select to anon using (true);
create policy "team write"  on public.calls for insert to anon with check (true);
create policy "team update" on public.calls for update to anon using (true) with check (true);

drop policy if exists "team read"   on public.training;
drop policy if exists "team write"  on public.training;
drop policy if exists "team delete" on public.training;
create policy "team read"   on public.training for select to anon using (true);
create policy "team write"  on public.training for insert to anon with check (true);
create policy "team delete" on public.training for delete to anon using (true);

drop policy if exists "team read"   on public.reps;
drop policy if exists "team write"  on public.reps;
drop policy if exists "team update" on public.reps;
create policy "team read"   on public.reps for select to anon using (true);
create policy "team write"  on public.reps for insert to anon with check (true);
create policy "team update" on public.reps for update to anon using (true) with check (true);
