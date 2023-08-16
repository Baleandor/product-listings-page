import { PostgrestError } from "@supabase/supabase-js"
import { UseQueryResult } from "@tanstack/react-query"

export type ProductType = {
    color: string
    description: string
    id: string
    image: string,
    name: string,
    price: number
    rating: number
}

export type CategoryNameAndDescriptionType =
    { [key: string]: { name: string, description: string } }


export type SupabaseQueryCallType =
    UseQueryResult<{
        data: ProductType[] | null;
        error: PostgrestError | null;
        count: number
    }, unknown>






