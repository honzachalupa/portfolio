import { Database } from "../../supabase/types";
import { supabase } from "../utils/supabase";

const create = async (
    payload: Database["public"]["Tables"]["projects"]["Insert"]
) => {
    const { error } = await supabase.from("projects").insert([payload]);

    if (error) {
        throw new Error(error.message);
    }
};

const search = async () => {
    const { data, error } = await supabase.from("projects").select();

    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        throw new Error("Record not found");
    }

    return data;
};

export const ProjectActions = {
    create,
    search,
};
