-- LiveCoach: shared call state for the manager board.
-- Run this once in Supabase → SQL Editor → New query → Run.
-- Internal-team tool: the anon key may read and write. Do not expose the anon key publicly.

create table if not exists public.calls (
  id            text primary key,
  rep           text not null default 'ללא שם',
  mode          text,
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
  transcript    jsonb default '[]'::jsonb,
  insights      jsonb default '[]'::jsonb,
  open_barriers integer default 0,
  summary       text,
  summary_json  jsonb,
  score         integer,
  outcome       text,
  next_step     text
);

create index if not exists calls_started_at_idx on public.calls (started_at desc);
create index if not exists calls_updated_at_idx on public.calls (updated_at desc);

alter table public.calls enable row level security;

drop policy if exists "team read"  on public.calls;
drop policy if exists "team write" on public.calls;
drop policy if exists "team update" on public.calls;

create policy "team read"   on public.calls for select to anon using (true);
create policy "team write"  on public.calls for insert to anon with check (true);
create policy "team update" on public.calls for update to anon using (true) with check (true);
