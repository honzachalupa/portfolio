import { Database } from "../../supabase/types";
import { supabase } from "../utils/supabase";

const create = async (
    payload: Database["public"]["Tables"]["jobs"]["Insert"]
) => {
    const { error } = await supabase.from("jobs").insert([payload]);

    if (error) {
        throw new Error(error.message);
    }
};

const search = async () => {
    const { data, error } = await supabase
        .from("jobs")
        .select("*, client:clients(*)")
        .order("dateFrom", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        throw new Error("Record not found");
    }

    return data as TJob[];
};

export const JobActions = {
    create,
    search,
};

export type TJob = Database["public"]["Tables"]["jobs"]["Row"] & {
    client: Database["public"]["Tables"]["clients"]["Row"];
};
