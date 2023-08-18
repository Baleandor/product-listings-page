import CategoryItem from "../components/CategoryItem";
import { Dispatch, SetStateAction, useEffect } from "react";
import { supabaseApiCalls } from "../api/supabaseApiCalls";
import CategoryNameAndDescription from "../components/CategoryNameAndDescription";
import { displayedNumberOfItems } from "../utils/numberOfItemsDisplayedAtOneTime";
import { ProductType } from "../utils/types";


type ProductListingsPropsType = {
    category: string,
    setProducts: Dispatch<SetStateAction<ProductType[] | null>>,
    products: ProductType[] | null,
    visibleCartItems: number,
    setVisibleCartItems: React.Dispatch<React.SetStateAction<number>>,
    checkboxColorFilter: string,
    priceRange: number[],
    fetchPriceRange: boolean,
    fetchDescendingAlphabeticOrder: boolean,
    fetchDescendingPriceOrder: boolean,
    fetchAscendingAlphabeticOrder: boolean,
    fetchAscendingPriceOrder: boolean,
}


export default function ProductListings({
    category,
    products,
    setProducts,
    visibleCartItems,
    setVisibleCartItems,
    checkboxColorFilter,
    priceRange,
    fetchPriceRange,
    fetchAscendingAlphabeticOrder,
    fetchDescendingAlphabeticOrder,
    fetchDescendingPriceOrder,
    fetchAscendingPriceOrder
}: ProductListingsPropsType) {

    const { data: getAllData, error: allDataError } = supabaseApiCalls.getAllItemsQuery(visibleCartItems, category)

    const { data: colorData, error: colorDataError } = supabaseApiCalls.getFilteredByColor(checkboxColorFilter, category, visibleCartItems)

    const { data: descendSortAlphabetic, error: descendAlphaSortError } = supabaseApiCalls.getDescendingAlphabeticSortOrder(category, visibleCartItems, fetchDescendingAlphabeticOrder)

    const { data: ascendSortAlphabetic, error: ascendAlphaSortError } = supabaseApiCalls.getAscendingAlphabeticSortOrder(category, visibleCartItems, fetchAscendingAlphabeticOrder)

    const { data: descendSortPrice, error: descendPriceSortError } = supabaseApiCalls.getDescendingPriceOrder(category, visibleCartItems, fetchDescendingPriceOrder)

    const { data: ascendSortPrice, error: ascendSortPriceError } = supabaseApiCalls.getAscendingPriceOrder(category, visibleCartItems, fetchAscendingPriceOrder)

    const { data: priceRangeData, error: priceRangeError } = supabaseApiCalls.getFilteredByPriceRange(priceRange, category, visibleCartItems, fetchPriceRange)

    useEffect(() => {
        if (getAllData != undefined && !allDataError) {
            setProducts(getAllData.data)
        }
    }, [getAllData, allDataError])

    useEffect(() => {
        if (colorData != undefined && getAllData != undefined && !colorDataError) {
            if (checkboxColorFilter === '') {
                setProducts(getAllData.data)
            } else {
                setProducts(colorData.data)
            }
        }
    }, [checkboxColorFilter, colorData, colorDataError])

    useEffect(() => {
        if (descendSortPrice != undefined && fetchDescendingPriceOrder && !descendPriceSortError) {
            setProducts(descendSortPrice.data)
        }
    }, [fetchDescendingPriceOrder, descendSortPrice, descendPriceSortError])

    useEffect(() => {
        if (descendSortAlphabetic != undefined && fetchDescendingAlphabeticOrder && !descendAlphaSortError) {
            setProducts(descendSortAlphabetic.data)
        }
    }, [fetchDescendingAlphabeticOrder, descendSortAlphabetic, descendAlphaSortError])

    useEffect(() => {
        if (ascendSortAlphabetic != undefined && fetchAscendingAlphabeticOrder && !ascendAlphaSortError) {
            setProducts(ascendSortAlphabetic.data)
        }
    }, [fetchDescendingAlphabeticOrder, ascendSortAlphabetic, ascendAlphaSortError])

    useEffect(() => {
        if (ascendSortPrice != undefined && fetchAscendingPriceOrder && !ascendSortPriceError) {
            setProducts(ascendSortPrice.data)
        }
    }, [fetchAscendingPriceOrder, ascendSortPrice, ascendSortPriceError])

    useEffect(() => {
        if (priceRangeData != undefined && fetchPriceRange && !priceRangeError) {
            setProducts(priceRangeData.data)
        }
    }, [fetchPriceRange, priceRange, priceRangeData, priceRangeError])

    const loadMoreProducts = () => {
        setVisibleCartItems((prevState: number) => prevState + displayedNumberOfItems)
    }


    return (
        <div className="flex flex-col">
            <CategoryNameAndDescription categoryName={category} />
            <div className='flex p-1'>
                <div className='p-1 flex mx-auto flex-col items-center'>
                    <div className='p-2'>
                        <span>
                            {
                                getAllData?.count != undefined && products != undefined && `Displaying ${products.length} out of ${getAllData?.count} items.`
                            }
                        </span>
                    </div>

                    {(getAllData?.error || colorData?.error || descendSortAlphabetic?.error || ascendSortAlphabetic?.error || descendSortPrice?.error || ascendSortPrice?.error || priceRangeData?.error) && <div>Internal server error! Please refresh and try again!</div>}


                    {
                        products != undefined && products.map((buggy) => {
                            return (
                                <div key={buggy.id} className="w-full">
                                    <CategoryItem categoryItem={buggy} />
                                </div>
                            )
                        })
                    }
                    {
                        products != undefined && products?.length >= visibleCartItems &&
                        <div className='p-1'>
                            <button onClick={loadMoreProducts} className="p-1 border rounded-xl border-red-600">Load More...</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}