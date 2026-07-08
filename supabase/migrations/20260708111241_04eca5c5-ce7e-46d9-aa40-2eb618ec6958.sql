
-- Role enum & user_roles table (secure role storage)
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

-- Inquiries table
CREATE TABLE public.hostel_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  college TEXT,
  course TEXT,
  year TEXT,
  sharing TEXT,
  joining_date TEXT,
  parent_phone TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'New',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.hostel_inquiries TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.hostel_inquiries TO authenticated;
GRANT ALL ON public.hostel_inquiries TO service_role;

ALTER TABLE public.hostel_inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone can create an inquiry
CREATE POLICY "Anyone can submit an inquiry" ON public.hostel_inquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Only admins can read / update / delete
CREATE POLICY "Admins can view inquiries" ON public.hostel_inquiries
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update inquiries" ON public.hostel_inquiries
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete inquiries" ON public.hostel_inquiries
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX hostel_inquiries_created_at_idx ON public.hostel_inquiries (created_at DESC);
CREATE INDEX hostel_inquiries_status_idx ON public.hostel_inquiries (status);
