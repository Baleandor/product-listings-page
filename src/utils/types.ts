import { PostgrestError } from "@supabase/supabase-js"
import { UseQueryResult } from "@tanstack/react-query"

export type productType = {
    color: string
    description: string
    id: string
    image: string,
    name: string,
    price: number
    rating: number
}

export type categoryNameAndDescriptionType =
    { [key: string]: { name: string, description: string } }


export type supabaseQueryCallType =
    UseQueryResult<{
        data: productType[] | null;
        error: PostgrestError | null;
        count: number
    }, unknown>






