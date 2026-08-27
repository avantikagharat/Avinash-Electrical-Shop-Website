/*
# Create contact_inquiries table (single-tenant, no auth)

1. New Tables
- `contact_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) - sender's full name
  - `email` (text, not null) - sender's email address
  - `phone` (text) - sender's phone number (optional)
  - `subject` (text) - inquiry subject/category
  - `message` (text, not null) - the inquiry body
  - `is_read` (boolean, default false) - whether the shop owner has read it
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_inquiries`.
- Allow anon + authenticated INSERT only (public contact form submissions).
- No SELECT/UPDATE/DELETE for anon/authenticated to protect submitted customer data.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries"
ON contact_inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);