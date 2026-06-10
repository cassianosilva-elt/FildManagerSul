process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ytqgrfuageleoebfabdl.supabase.co';
const supabaseKey = 'sb_publishable_PYdUNkZVJYhLlLQy9bl9tg_POzzH1qC';
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    console.log("Attempting to insert a vehicle...");
    const { data, error } = await supabase.from('vehicles').insert({
        tag: 'QWDASD',
        model: 'SADSADAS',
        plate: 'DASDSAD',
        company_id: 'dummy_company',
        current_km: 12312,
        last_maintenance_km: 123,
        status: 'Disponível',
        // maintenance_notes is undefined, so we omit it or pass null
    });
    
    if (error) {
        console.error("Insert error:", error);
    } else {
        console.log("Insert success");
    }
}

check();
