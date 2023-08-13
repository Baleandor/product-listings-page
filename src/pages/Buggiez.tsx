import { supabaseApiCalls } from '../api/supabaseApiCalls'
import { useEffect, useState } from 'react'
import CategoryItem from '../components/CategoryItem'
import { displayedNumberOfItems } from '../utils/numberOfItemsDisplayedAtOneTime'
import CategoryNameAndDescription from '../components/CategoryNameAndDescription'
import { useLocation } from 'react-router'





export default function Buggiez() {

    const [buggiez, setBuggiez] = useState([])
    const [visibleCartItems, setVisibleCartItems] = useState(displayedNumberOfItems)

    const { pathname } = useLocation()
    const urlPath = pathname.slice(1)

    const { data: buggyData, error, isLoading } = supabaseApiCalls.getAllBuggiezQuery()

    useEffect(() => {
        if (buggyData != undefined && !error) {
            setBuggiez(buggyData)
        }
    }, [buggyData])

    const loadMoreProducts = () => {
        setVisibleCartItems((prevState) => prevState + displayedNumberOfItems)
    }



    return (


        <div className='p-2 flex flex-col items-center'>
            <CategoryNameAndDescription categoryName={urlPath} />
            <div className='p-2'>
                <span>Displaying {displayedNumberOfItems} out of {buggiez.length} items.</span>
            </div>
            {isLoading ? <span>Loading data...</span> : buggiez.slice(0, visibleCartItems).map((buggy) => {
                return <CategoryItem categoryItem={buggy} key={buggy.id} />
            })}
            <div className='p-1'>
                <button onClick={loadMoreProducts} className="p-1 border rounded-xl border-red-600">Load More...</button>
            </div>
        </div>

    )
}