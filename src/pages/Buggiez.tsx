import { supabaseApiCalls } from '../api/supabaseApiCalls'
import { useEffect, useState } from 'react'
import CategoryItem from '../components/CategoryItem'
import { displayedNumberOfItems } from '../utils/numberOfItemsDisplayedAtOneTime'
import CategoryNameAndDescription from '../components/CategoryNameAndDescription'
import { useLocation } from 'react-router'
import Filter from '../components/Filter'





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

    const setCheckboxFilter = (checkboxState: string) => {
        if (checkboxState === '') {
            setBuggiez(buggyData)
        } else {
            const filterResult = [...buggyData].filter((element) => element.color === checkboxState)

            setBuggiez(filterResult)
        }
    }



    return (

        <div className='flex p-1'>
            <div className='mr-auto'>
                <Filter setCheckboxFilter={setCheckboxFilter} />
            </div>

            <div className='p-1 flex mr-auto flex-col items-center'>
                <CategoryNameAndDescription categoryName={urlPath} />
                <div className='p-2'>
                    <span>
                        {
                            buggiez.length > visibleCartItems && `Displaying ${visibleCartItems} out of ${buggiez.length} items.` ||
                            buggiez.length <= visibleCartItems && `Displaying ${buggiez.length} items.`
                        }
                    </span>
                </div>
                {
                    isLoading ? <span>Loading data...</span> : buggiez.slice(0, visibleCartItems).map((buggy) => {
                        return <CategoryItem categoryItem={buggy} key={buggy.id} />
                    })
                }
                {
                    buggiez.length >= visibleCartItems && <div className='p-1'>
                        <button onClick={loadMoreProducts} className="p-1 border rounded-xl border-red-600">Load More...</button>
                    </div>

                }
            </div>
        </div>

    )
}