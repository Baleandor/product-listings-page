import { useQuery } from "@tanstack/react-query"
import { supabase } from "../supabase/supabase"
import { supabaseQueryCallType } from "../utils/types"

const getAllItemsQuery = (nextPage: number, itemsCategory: string) => {
    const buggyData: supabaseQueryCallType = useQuery({
        queryKey: ['buggiez', nextPage, itemsCategory],
        queryFn: async () => {
            const { data, error, count } = await supabase
                .from(itemsCategory)
                .select('*', { count: "exact" })
                .range(0, nextPage)

            return { data, count, error }
        }
    })

    return buggyData
}

const getFilteredByColor = (color: string, category: string, visibleCartItems: number) => {
    const filteredByColor: supabaseQueryCallType = useQuery({
        queryKey: ['filteredByColor', color, visibleCartItems, category],
        queryFn: async () => {
            const { data, error } = await supabase
                .from(category)
                .select('*')
                .eq('color', color)
                .range(0, visibleCartItems)

            return { data, error }
        }
    })
    return filteredByColor
}

const getFilteredByPriceRange = (priceRange: number[], category: string, visibleCartItems: number, fetchPriceRange: boolean) => {
    const filteredByPriceRange: supabaseQueryCallType = useQuery({
        queryKey: ['filteredByPriceRange', priceRange, visibleCartItems],
        queryFn: async () => {
            const { data, error } = await supabase
                .from(category)
                .select('*')
                .gte('price', priceRange[0])
                .lte('price', priceRange[1])
                .range(0, visibleCartItems)

            return { data, error }
        },
        enabled: fetchPriceRange
    })

    return filteredByPriceRange
}

const getDescendingAlphabeticSortOrder = (category: string, visibleCartItems: number, fetchOrder: boolean) => {
    const sortOrder: supabaseQueryCallType = useQuery({
        queryKey: ['descendingAlphabeticSortOrder', category, visibleCartItems],
        queryFn: async () => {
            const { data, error } = await supabase
                .from(category)
                .select('*')
                .order('name', { ascending: false })
                .range(0, visibleCartItems)

            return { data, error }
        },
        enabled: fetchOrder
    })
    return sortOrder
}

const getAscendingAlphabeticSortOrder = (category: string, visibleCartItems: number, fetchOrder: boolean) => {
    const sortOrder: supabaseQueryCallType = useQuery({
        queryKey: ['ascendingAlphabeticSortOrder', category, visibleCartItems],
        queryFn: async () => {
            const { data, error } = await supabase
                .from(category)
                .select('*')
                .order('name', { ascending: true })
                .range(0, visibleCartItems)

            return { data, error }
        },
        enabled: fetchOrder
    })
    return sortOrder
}

const getDescendingPriceOrder = (category: string, visibleCartItems: number, fetchOrder: boolean) => {
    const sortOrder: supabaseQueryCallType = useQuery({
        queryKey: ['descendingPriceSortOrder', category, visibleCartItems],
        queryFn: async () => {
            const { data, error } = await supabase
                .from(category)
                .select('*')
                .order('price', { ascending: false })
                .range(0, visibleCartItems)


            return { data, error }
        },
        enabled: fetchOrder
    })
    return sortOrder
}
const getAscendingPriceOrder = (category: string, visibleCartItems: number, fetchOrder: boolean) => {
    const sortOrder: supabaseQueryCallType = useQuery({
        queryKey: ['ascendingPriceSortOrder', category, visibleCartItems],
        queryFn: async () => {
            const { data, error } = await supabase
                .from(category)
                .select('*')
                .order('price', { ascending: true })
                .range(0, visibleCartItems)


            return { data, error }
        },
        enabled: fetchOrder
    })
    return sortOrder
}

const getAscendingSortOrder = (category: string, sortType: string, visibleCartItems: number, fetchOrder: boolean) => {
    const sortOrder: supabaseQueryCallType = useQuery({
        queryKey: ['AscendingSortOrder', sortType, category, visibleCartItems],
        queryFn: async () => {
            const { data, error } = await supabase
                .from(category)
                .select('*')
                .order(sortType, { ascending: true })
                .range(0, visibleCartItems)

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
    getDescendingAlphabeticSortOrder,
    getAscendingSortOrder,
    getDescendingPriceOrder,
    getAscendingAlphabeticSortOrder,
    getAscendingPriceOrder
}