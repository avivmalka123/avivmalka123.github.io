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

-- Monthly metrics documents (computed in the manager board from the ToChat/Fireberry exports).
create table if not exists public.metrics (
  month       text primary key,                   -- YYYY-MM
  data        jsonb not null,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);
alter table public.metrics enable row level security;
drop policy if exists "team read"   on public.metrics;
drop policy if exists "team write"  on public.metrics;
drop policy if exists "team update" on public.metrics;
create policy "team read"   on public.metrics for select to anon using (true);
create policy "team write"  on public.metrics for insert to anon with check (true);
create policy "team update" on public.metrics for update to anon using (true) with check (true);

-- One row per lead per month (journeys + call summaries), queried by the metrics tab.
create table if not exists public.metric_leads (
  month        text not null,
  phone        text not null,
  name         text,
  funnel       text,
  channel      text,
  ref          text,
  level        text,
  created      text,
  fb_status    text,
  fb_manager   text,
  tc_status    text,
  reason       text,
  calls        integer default 0,
  talk_min     numeric default 0,
  first_call   text,
  last_call    text,
  reps         jsonb default '[]'::jsonb,
  closer       text,
  closed       boolean default false,
  closed_at    text,
  close_reason text,
  close_funnel text,
  new_in_month boolean default false,
  summaries    jsonb default '[]'::jsonb,
  primary key (month, phone)
);
create index if not exists metric_leads_month_idx on public.metric_leads (month);
alter table public.metric_leads enable row level security;
drop policy if exists "team read"   on public.metric_leads;
drop policy if exists "team write"  on public.metric_leads;
drop policy if exists "team update" on public.metric_leads;
drop policy if exists "team delete" on public.metric_leads;
create policy "team read"   on public.metric_leads for select to anon using (true);
create policy "team write"  on public.metric_leads for insert to anon with check (true);
create policy "team update" on public.metric_leads for update to anon using (true) with check (true);
create policy "team delete" on public.metric_leads for delete to anon using (true);

-- Exemplary calls the manager marks: the coach extracts the good moves into `training` (source = exemplar).
create table if not exists public.exemplars (
  id          text primary key,
  created_at  timestamptz default now(),
  title       text,
  avatar      text,
  rep         text,
  note        text,
  call_id     text,
  transcript  text,
  lessons     jsonb default '[]'::jsonb
);
alter table public.exemplars enable row level security;
drop policy if exists "team read"   on public.exemplars;
drop policy if exists "team write"  on public.exemplars;
drop policy if exists "team delete" on public.exemplars;
create policy "team read"   on public.exemplars for select to anon using (true);
create policy "team write"  on public.exemplars for insert to anon with check (true);
create policy "team delete" on public.exemplars for delete to anon using (true);

-- ── lead journeys (time to conversion) + daily digests ── added 2026-09-16
create table if not exists lead_journeys (
  month text not null,
  phone text not null,
  data jsonb not null,
  updated_at timestamptz default now(),
  primary key (month, phone)
);
create table if not exists daily_digests (
  date date primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);
alter table lead_journeys enable row level security;
alter table daily_digests enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where tablename='lead_journeys' and policyname='anon all lead_journeys') then
    create policy "anon all lead_journeys" on lead_journeys for all to anon using (true) with check (true);
  end if;
  if not exists (select 1 from pg_policies where tablename='daily_digests' and policyname='anon all daily_digests') then
    create policy "anon all daily_digests" on daily_digests for all to anon using (true) with check (true);
  end if;
end $$;
