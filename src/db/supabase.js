// /* eslint-disable no-undef */
// import { createBrowserClient } from "@supabase/ssr";

// export const createClient = () => {
//     const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
//     const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//     if (!supabaseUrl || !supabaseAnonKey) {
//         console.warn("Supabase environment variables are missing!");
//     }

//     return createBrowserClient(supabaseUrl || '', supabaseAnonKey || '');
// };

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
