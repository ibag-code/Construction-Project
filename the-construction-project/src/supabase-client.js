import {createClient} from '@supabase/supabase-js'

const supabaseUrl = "https://ymvuzwnghkprynzrdicb.supabase.co"
const supabaseKey = "sb_publishable_icrEQNaXStY-neDQsPueHw_oueJiU7X"

const supabase  = createClient(supabaseUrl, supabaseKey)

export default supabase