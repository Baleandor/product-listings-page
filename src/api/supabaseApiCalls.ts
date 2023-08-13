import { useQuery } from "@tanstack/react-query"
import { supabase } from "../supabase/supabase"

const getAllBuggiezQuery = () => {
    const buggyData = useQuery({
        queryKey: ['buggiez'],
        queryFn: async () => {
            const { data: buggiez, error } = await supabase
                .from('Buggiez')
                .select('*')

            return buggiez || error
        }
    })

    return buggyData
}



export const supabaseApiCalls = {
    getAllBuggiezQuery
}