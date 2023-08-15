import { useQuery } from "@tanstack/react-query"
import { supabase } from "../supabase/supabase"

const getAllItemsQuery = (nextPage: number, itemsCategory: string) => {
    const supabasePageNumber = nextPage - 1
    const buggyData = useQuery({
        queryKey: ['buggiez', supabasePageNumber, itemsCategory],
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

const getFilteredByColor = (color: string, category: string, visibleCartItems: number) => {
    const pageNumber = visibleCartItems - 1


    const filteredByColor = useQuery({
        queryKey: ['filteredByColor', color, pageNumber, category],
        queryFn: async () => {
            const { data, error } = await supabase
                .from(category)
                .select('*')
                .eq('color', color)
                .range(0, pageNumber)

            return { data, error }
        }
    })
    return filteredByColor
}

const getFilteredByPriceRange = (priceRange: number[], category: string, visibleCartItems: number, fetchPriceRange: boolean) => {
    const pageNumber = visibleCartItems - 1
    const filteredByPriceRange = useQuery({
        queryKey: ['filteredByPriceRange', priceRange, pageNumber],
        queryFn: async () => {
            const { data, error, count } = await supabase
                .from(category)
                .select('*')
                .gte('price', priceRange[0])
                .lte('price', priceRange[1])
                .range(0, pageNumber)

            return { data, error, count }
        },
        enabled: fetchPriceRange
    })
    return filteredByPriceRange
}

const getDescendingSortOrder = (category: string, sortType: string, visibleCartItems: number, fetchOrder: boolean) => {
    const pageNumber = visibleCartItems - 1
    const sortOrder = useQuery({
        queryKey: ['descendingSortOrder', sortType, category, visibleCartItems],
        queryFn: async () => {
            const { data, error } = await supabase
                .from(category)
                .select('*')
                .order(sortType, { ascending: false })
                .range(0, pageNumber)

            return { data, error }
        },
        enabled: fetchOrder
    })
    return sortOrder
}

const getAscendingSortOrder = (category: string, sortType: string, visibleCartItems: number, fetchOrder: boolean) => {
    const pageNumber = visibleCartItems - 1
    const sortOrder = useQuery({
        queryKey: ['AscendingSortOrder', sortType, category, visibleCartItems],
        queryFn: async () => {
            const { data, error } = await supabase
                .from(category)
                .select('*')
                .order(sortType, { ascending: true })
                .range(0, pageNumber)

            return { data, error }
        },
        enabled: fetchOrder
    })
    return sortOrder
}

export const supabaseApiCalls = {
    getAllItemsQuery,
    getFilteredByColor,
    getFilteredByPriceRange,
    getDescendingSortOrder,
    getAscendingSortOrder
}