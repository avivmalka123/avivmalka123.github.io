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

-- ── ToChat webhook state for the data worker (moved off Cloudflare KV, 2026-09-16) ──
create table if not exists tc_events (
  id bigserial primary key,
  ts timestamptz not null default now(),
  type text, phone text, agent text, name text, campaign text, external_id text,
  raw jsonb
);
create index if not exists tc_events_ts on tc_events (ts desc);
create table if not exists tc_active (
  agent_key text primary key,
  phone text, agent text, name text, campaign text, external_id text, type text,
  ts timestamptz not null default now()
);
create table if not exists tc_calls (
  id bigserial primary key,
  phone text not null, t timestamptz not null, type text, rep text,
  sec int default 0, rec text, ai text, name text, campaign text
);
create index if not exists tc_calls_phone on tc_calls (phone, t);
create index if not exists tc_calls_t on tc_calls (t);
alter table tc_events enable row level security;
alter table tc_active enable row level security;
alter table tc_calls enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where tablename='tc_events' and policyname='anon all tc_events') then
    create policy "anon all tc_events" on tc_events for all to anon using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where tablename='tc_active' and policyname='anon all tc_active') then
    create policy "anon all tc_active" on tc_active for all to anon using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where tablename='tc_calls' and policyname='anon all tc_calls') then
    create policy "anon all tc_calls" on tc_calls for all to anon using (true) with check (true); end if;
end $$;

-- ── live war-room columns on calls (2026-09-16 evening): readiness, manual facts/barriers, A/B, lead, manager whisper ──
alter table calls add column if not exists say_a text;
alter table calls add column if not exists say_b text;
alter table calls add column if not exists readiness int;
alter table calls add column if not exists bottom_line text;
alter table calls add column if not exists solved text;
alter table calls add column if not exists to_solve text;
alter table calls add column if not exists barriers jsonb;
alter table calls add column if not exists facts jsonb;
alter table calls add column if not exists lead_phone text;
alter table calls add column if not exists lead_name text;
alter table calls add column if not exists whisper text;
alter table calls add column if not exists whisper_at timestamptz;
alter table calls add column if not exists whisper_by text;

-- ── follow-up plans + end-of-day reviews (2026-09-16 night) ──
create table if not exists followups (
  id text primary key,
  rep text not null,
  phone text, name text, call_id text,
  plan jsonb not null,
  next_at timestamptz,
  status text default 'open',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists followups_rep_next on followups (rep, next_at);
create table if not exists day_reviews (
  rep text not null,
  day date not null,
  data jsonb not null,
  seen boolean default false,
  updated_at timestamptz default now(),
  primary key (rep, day)
);
alter table followups enable row level security;
alter table day_reviews enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where tablename='followups' and policyname='anon all followups') then
    create policy "anon all followups" on followups for all to anon using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where tablename='day_reviews' and policyname='anon all day_reviews') then
    create policy "anon all day_reviews" on day_reviews for all to anon using (true) with check (true); end if;
end $$;

-- ── per-rep day state shared between the rep app and the manager's "rep view" (2026-09-16 night) ──
create table if not exists day_commits (
  rep text not null, day date not null, data jsonb not null, updated_at timestamptz default now(), primary key (rep, day));
create table if not exists morning_plans (
  rep text not null, day date not null, data jsonb not null, updated_at timestamptz default now(), primary key (rep, day));
alter table day_commits enable row level security;
alter table morning_plans enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where tablename='day_commits' and policyname='anon all day_commits') then
    create policy "anon all day_commits" on day_commits for all to anon using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where tablename='morning_plans' and policyname='anon all morning_plans') then
    create policy "anon all morning_plans" on morning_plans for all to anon using (true) with check (true); end if;
end $$;

-- ── audio / transcription diagnostics per call (2026-09-17) ──
alter table calls add column if not exists diag jsonb;

-- ── qualification interviews calendar with manager approval (2026-09-22) ──
create table if not exists interviews (
  id text primary key,                 -- the qualification call id
  phone text, name text, rep text,
  meet_at timestamptz, meet_label text,
  status text default 'pending',       -- pending | approved | rejected | moved
  manager_note text, decided_by text, decided_at timestamptz,
  sent_at timestamptz,                 -- when the rep copied / sent the confirmation message
  fit integer, verdict text, summary text, note_to_manager text, form jsonb, criteria jsonb,
  created_at timestamptz default now(), updated_at timestamptz default now()
);
alter table interviews enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where tablename='interviews' and policyname='anon all interviews') then
    create policy "anon all interviews" on interviews for all to anon using (true) with check (true); end if;
end $$;
create index if not exists interviews_meet_at on interviews(meet_at);

-- ── interviews: outcomes, manual entries, interviewer working hours (2026-09-22) ──
alter table interviews add column if not exists outcome text;          -- closed | failed | rescheduled
alter table interviews add column if not exists outcome_reason text;
alter table interviews add column if not exists amount numeric;
alter table interviews add column if not exists outcome_at timestamptz;
alter table interviews add column if not exists source text default 'call';   -- call | manual
alter table interviews add column if not exists notes text;
alter table interviews add column if not exists history jsonb;
create table if not exists work_hours (
  day date primary key, start_t text, end_t text, updated_at timestamptz default now()
);
alter table work_hours enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where tablename='work_hours' and policyname='anon all work_hours') then
    create policy "anon all work_hours" on work_hours for all to anon using (true) with check (true); end if;
end $$;

-- ── interviewer day blocks (breaks / not working) inside work_hours (2026-09-23) ──
alter table work_hours add column if not exists blocks jsonb;
