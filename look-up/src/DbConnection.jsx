import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pkxernmbhamllzsmyvmf.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBreGVybm1iaGFtbGx6c215dm1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MzkyODgsImV4cCI6MjAwOTQxNTI4OH0.JLnMkm2TLY94JpVCQB2jrHhAaapsbsyoJ3Wv8M_GByo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
