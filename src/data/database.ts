import {createClient} from "@supabase/supabase-js"


const URL = "https://uuzbangvjnascgpnadvl.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1emJhbmd2am5hc2NncG5hZHZsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTc3Mjc3MywiZXhwIjoyMDU1MzQ4NzczfQ.Klcbf0PQEUUnIaG7SvDHGt6pTnx7tCMYrap3_mirx0Q"

export const supabase = createClient(URL, key);
