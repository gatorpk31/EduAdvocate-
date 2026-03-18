-- PlanVocate Initial Schema
-- Axiom 38 LLC | Michigan
-- All tables use Row Level Security (RLS)

-- ============================================
-- Table: profiles (extends Supabase Auth)
-- Stores: role, state preference, age confirmation
-- Never stores: child name, diagnosis, school, IEP/504 content
-- ============================================
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  role text check (role in ('parent', 'educator')),
  state_preference char(2),
  age_confirmed boolean default false,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can read own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert with check (auth.uid() = id);

-- ============================================
-- Table: reviews
-- Public reviews with admin moderation
-- ============================================
create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  submitted_at timestamptz default now(),
  reviewer_first_name text not null,
  reviewer_role text check (reviewer_role in ('parent', 'educator')),
  reviewer_state char(2),
  rating integer check (rating between 1 and 5) not null,
  review_text text not null,
  status text default 'pending' check (status in ('pending', 'approved', 'rejected')),
  admin_note text,
  approved_at timestamptz
);

alter table public.reviews enable row level security;

create policy "Anyone can insert a review"
  on public.reviews for insert to anon with check (true);

create policy "Public reads approved reviews only"
  on public.reviews for select to anon using (status = 'approved');

-- Service role handles approve/reject via admin backend

-- ============================================
-- Table: feedback
-- Internal feedback — never displayed publicly
-- ============================================
create table public.feedback (
  id uuid primary key default gen_random_uuid(),
  submitted_at timestamptz default now(),
  submitter_email text,
  submitter_role text check (submitter_role in ('parent', 'educator')),
  what_worked text,
  what_to_improve text,
  feature_requests text,
  rating integer check (rating between 1 and 5),
  admin_read boolean default false
);

alter table public.feedback enable row level security;

create policy "Anyone can submit feedback"
  on public.feedback for insert to anon with check (true);

-- No public SELECT policy — ever. Service role only.

-- ============================================
-- Table: guide_purchases
-- Stripe payment tracking with one-time tokens
-- ============================================
create table public.guide_purchases (
  id uuid primary key default gen_random_uuid(),
  stripe_session_id text unique not null,
  customer_email text,
  purchased_at timestamptz default now(),
  guide_token uuid unique default gen_random_uuid(),
  token_used boolean default false,
  token_used_at timestamptz
);

alter table public.guide_purchases enable row level security;

-- No public access. Service role only. Tokens validated server-side.

-- ============================================
-- Table: alerts
-- Legislative alerts displayed to site visitors
-- ============================================
create table public.alerts (
  id uuid primary key default gen_random_uuid(),
  state text,
  alert_text text not null,
  effective_date date,
  active boolean default true,
  created_at timestamptz default now()
);

alter table public.alerts enable row level security;

create policy "Public reads active alerts"
  on public.alerts for select to anon using (active = true);
