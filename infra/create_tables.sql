-- Supabase SQL schema (basic)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade,
  full_name text,
  company text,
  created_at timestamptz default now(),
  primary key (id)
);

create table if not exists public.plans (
  id text primary key,
  title text,
  description text,
  created_at timestamptz default now()
);

create table if not exists public.products (
  id text primary key,
  title text,
  description text,
  created_at timestamptz default now()
);

create table if not exists public.prices (
  id uuid primary key default gen_random_uuid(),
  product_id text references public.products(id),
  plan_id text references public.plans(id),
  stripe_price_id text,
  amount integer,
  currency text default 'eur',
  created_at timestamptz default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade,
  stripe_subscription_id text,
  status text,
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz default now()
);

create table if not exists public.user_products (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade,
  product_id text references public.products(id),
  plan_id text references public.plans(id),
  active boolean default true,
  activated_at timestamptz default now(),
  expires_at timestamptz
);
