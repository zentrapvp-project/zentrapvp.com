import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Logout() {
    const supabase = await createClient();

    const logout = await supabase.auth.signOut({})

    if (logout) {
        redirect(`/`)
    }

}