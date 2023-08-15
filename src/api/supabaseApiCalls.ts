import { useQuery } from "@tanstack/react-query"
import { supabase } from "../supabase/supabase"

const getAllItemsQuery = (nextPage: number, itemsCategory: string) => {

    const supabasePageNumber = nextPage - 1
    const buggyData = useQuery({
        queryKey: ['buggiez', supabasePageNumber],
        queryFn: async () => {

            const { data, error, count } = await supabase
                .from(itemsCategory)
                .select('*', { count: "exact" })
                .range(0, supabasePageNumber)

            return { data, count, error }
        }
    })

    return buggyData
}

const getFilteredByColor = (color: string, category: string) => {

    const filteredByColor = useQuery({
        queryKey: ['filteredByColor', color],
        queryFn: async () => {
            const { data, error, count } = await supabase
                .from(category)
                .select(color, { count: 'exact' })

            return { data, error, count }
        }
    })

    return filteredByColor
}

export const supabaseApiCalls = {
    getAllItemsQuery,
    getFilteredByColor
}