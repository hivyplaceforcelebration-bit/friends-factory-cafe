-- Google Reviews Pool
create table if not exists google_reviews (
  id uuid default gen_random_uuid() primary key,
  text text not null,
  star_rating smallint not null check (star_rating in (4, 5)),
  status text not null default 'active' check (status in ('active', 'archived')),
  archived_at timestamptz,
  created_at timestamptz default now()
);

-- Index for fast random active-review fetching
create index if not exists idx_google_reviews_status on google_reviews(status);
