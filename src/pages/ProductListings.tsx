import CategoryItem from "../components/CategoryItem";
import { useEffect } from "react";
import { supabaseApiCalls } from "../api/supabaseApiCalls";
import CategoryNameAndDescription from "../components/CategoryNameAndDescription";
import { displayedNumberOfItems } from "../utils/numberOfItemsDisplayedAtOneTime";


type ProductListingsPropsType = {
    category: string,
    setProducts: React.Dispatch<React.SetStateAction<never[]>>,
    products: any[],
    visibleCartItems: number,
    setVisibleCartItems: React.Dispatch<any>,
    checkboxColorFilter: string,
    priceRange: number[],
    fetchPriceRange: boolean,
    sortAscendingType: string,
    fetchAscendingOrder: boolean,
    sortDescendingType: string,
    fetchDescendingOrder: boolean
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
    sortAscendingType,
    fetchAscendingOrder,
    sortDescendingType,
    fetchDescendingOrder

}: ProductListingsPropsType) {


    const { data: buggyData, error, isLoading } = supabaseApiCalls.getAllItemsQuery(visibleCartItems, category)

    const { data: descendSortBuggy } = supabaseApiCalls.getDescendingSortOrder(category, sortDescendingType, visibleCartItems, fetchDescendingOrder)

    const { data: ascendSortBuggy } = supabaseApiCalls.getAscendingSortOrder(category, sortAscendingType, visibleCartItems, fetchAscendingOrder)

    const { data: colorBuggy } = supabaseApiCalls.getFilteredByColor(checkboxColorFilter, category, visibleCartItems)

    const { data: priceRangeBuggy } = supabaseApiCalls.getFilteredByPriceRange(priceRange, category, visibleCartItems, fetchPriceRange)


    useEffect(() => {
        if (buggyData != undefined && !error) {
            setProducts(buggyData?.data)
        }

    }, [buggyData])

    useEffect(() => {
        console.log('in')
        if (colorBuggy != undefined) {
            if (checkboxColorFilter === '') {
                setProducts(buggyData?.data)
            } else {
                setProducts(colorBuggy?.data)
            }
        }

        if (priceRangeBuggy != undefined) {
            setProducts(priceRangeBuggy?.data)
        }

        if (ascendSortBuggy != undefined) {
            setProducts(ascendSortBuggy?.data)

        }

        if (descendSortBuggy != undefined) {
            setProducts(descendSortBuggy?.data)

        }

    }, [checkboxColorFilter, fetchPriceRange, priceRange, sortAscendingType, fetchAscendingOrder, sortDescendingType, fetchDescendingOrder])


    const loadMoreProducts = () => {
        setVisibleCartItems((prevState: number) => prevState + displayedNumberOfItems)
    }


    return (
        <div>
            <div>
                <CategoryNameAndDescription categoryName={category} />
            </div>
            <div className='flex p-1'>

                <div className='p-1 flex mr-auto flex-col items-center'>
                    {/* <SortOrder sortAToZ={sortAToZ} sortZToA={sortZToA} sortPriceAscending={sortPriceAscending} sortPriceDescending={sortPriceDescending} /> */}

                    <div className='p-2'>
                        <span>
                            {
                                buggyData?.count != undefined && products != undefined && `Displaying ${products.length} out of ${buggyData?.count} items.`

                            }
                        </span>
                    </div>
                    {
                        buggyData?.error && <div>Internal server error! Please refresh and try again!</div>
                    }
                    {
                        isLoading ? <span>Loading data...</span> : products != undefined && products.map((buggy) => {
                            return (
                                <div key={buggy.id}>
                                    <CategoryItem categoryItem={buggy} />
                                </div>
                            )
                        })
                    }
                    {
                        products?.length >= visibleCartItems && <div className='p-1'>
                            <button onClick={loadMoreProducts} className="p-1 border rounded-xl border-red-600">Load More...</button>
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}