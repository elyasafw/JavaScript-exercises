import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL, SUPABASE_SECRET_KEY } = process.env;

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY);

function repo() {
    async function create(table, details) {
        try {
            const { error, data } = await supabase
                .from(table)
                .insert(details)
                .select();
            if (error) return console.error(error.message);
            console.log(`created successfully: ${data}`);
        } catch (error) {
            console.error(error);
        }
    }
    async function update(table, details, id) {
        try {
            const { error, data } = await supabase
                .from(table)
                .update(details)
                .eq("id", id)
                .select();
            if (error) return console.error(error.message);
            console.error(`ID: ${id} updated successfully`);
        } catch (error) {
            console.error(error);
        }
    }
    async function selectAll(table) {
        try {
            const { error, data } = await supabase.from(table).select("*");
            if (error) return console.error(error.message);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    async function deleteFromTable(table, id) {
        try {
            const { error } = await supabase.from(table).delete().eq("id", id);
            if (error) return console.error(error.message);
            console.log(`ID: ${id} deleted successfully`);
        } catch (error) {
            console.error(error);
        }
    }
    return { create, update, selectAll, deleteFromTable };
}

const supabaseRepo = repo();

export default supabaseRepo;
