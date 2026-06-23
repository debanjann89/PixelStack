-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Clients Table
create table if not exists clients (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  business_name text,
  industry text,
  phone text,
  email text,
  project_type text,
  project_description text,
  selected_package text,
  project_cost numeric,
  timeline text,
  address text,
  notes text,
  status text default 'Lead',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Projects Table
create table if not exists projects (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  title text not null,
  description text,
  selected_package text,
  cost numeric,
  timeline text,
  status text default 'Project Started',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Invoices Table
create table if not exists invoices (
  id uuid primary key default uuid_generate_v4(),
  invoice_number text not null unique,
  client_id uuid references clients(id) on delete cascade,
  project_id uuid references projects(id) on delete set null,
  issue_date date not null,
  due_date date not null,
  package_selected text,
  services_breakdown jsonb not null default '[]'::jsonb,
  amount numeric not null,
  total_amount numeric not null,
  payment_instructions text,
  status text default 'Pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Document History Table
create table if not exists document_history (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  doc_type text not null,
  name text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Leads Table
create table if not exists leads (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  business_name text,
  phone text,
  email text,
  project_type text,
  budget_range text,
  status text default 'new',
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Messages Table
create table if not exists messages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  business_name text,
  phone text,
  email text,
  project_type text,
  budget_range text,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Consultations Table
create table if not exists consultations (
  id uuid primary key default uuid_generate_v4(),
  client_name text not null,
  email text,
  phone text,
  date date not null,
  project_type text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
