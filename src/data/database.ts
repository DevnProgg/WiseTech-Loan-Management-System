import {createClient} from "@supabase/supabase-js"


const URL = "https://efgmzfpesflputlviatp.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZ216ZnBlc2ZscHV0bHZpYXRwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzM5NDg4MCwiZXhwIjoyMDQ4OTcwODgwfQ.puFXFL-zf3GCzt7SSZIpNIJA-j5NVz26zhyEmiphwmc"

export const supabase = createClient(URL, key);