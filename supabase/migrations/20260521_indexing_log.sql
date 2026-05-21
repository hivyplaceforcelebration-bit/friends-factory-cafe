-- Google Indexing Log
create table if not exists indexing_log (
  id uuid default gen_random_uuid() primary key,
  url text not null,
  status text not null check (status in ('success', 'failed', 'skipped')),
  http_status integer,
  error_message text,
  submitted_at timestamptz default now()
);

create index if not exists idx_indexing_log_url on indexing_log(url);
create index if not exists idx_indexing_log_status on indexing_log(status);
create index if not exists idx_indexing_log_submitted_at on indexing_log(submitted_at);
