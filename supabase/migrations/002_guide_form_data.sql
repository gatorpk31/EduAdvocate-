-- Add guide form data columns to guide_purchases
-- so token-based re-access can regenerate the guide without sessionStorage
alter table public.guide_purchases
  add column guide_state char(2),
  add column guide_plan_type text check (guide_plan_type in ('iep', '504')),
  add column guide_grade text,
  add column guide_concerns text[];
