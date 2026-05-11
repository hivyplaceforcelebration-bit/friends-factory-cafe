-- Google Indexing API Quota Tracking (Supabase)
-- Replaces in-memory quotaState for Vercel serverless reliability

CREATE TABLE IF NOT EXISTS google_indexing_quota (
  date TEXT PRIMARY KEY,
  used_count INT DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS but allow authenticated users to read
ALTER TABLE google_indexing_quota ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service role to manage quota"
  ON google_indexing_quota
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Google Indexing API Submission Log
-- Tracks every URL submission attempt for debugging and monitoring

CREATE TABLE IF NOT EXISTS google_indexing_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  url TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('success', 'error', 'skipped')),
  http_status INT,
  error_message TEXT,
  submitted_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  batch_day INT,
  retry_count INT DEFAULT 0
);

-- Enable RLS
ALTER TABLE google_indexing_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service role to manage logs"
  ON google_indexing_log
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Indexes for efficient querying
CREATE INDEX IF NOT EXISTS google_indexing_log_status_submitted_idx
  ON google_indexing_log (status, submitted_at DESC);

CREATE INDEX IF NOT EXISTS google_indexing_log_url_idx
  ON google_indexing_log (url);

CREATE INDEX IF NOT EXISTS google_indexing_log_batch_day_idx
  ON google_indexing_log (batch_day);
