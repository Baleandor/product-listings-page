import { useState } from "react"


type SortOrderPropsType = {
    setFetchDescendingAlphabeticOrder: React.Dispatch<React.SetStateAction<boolean>>,
    setFetchDescendingPriceOrder: React.Dispatch<React.SetStateAction<boolean>>,
    setFetchAscendingAlphabeticOrder: React.Dispatch<React.SetStateAction<boolean>>,
    setFetchAscendingPriceOrder: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function SortOrder({
    setFetchDescendingAlphabeticOrder,
    setFetchDescendingPriceOrder,
    setFetchAscendingAlphabeticOrder,
    setFetchAscendingPriceOrder
}: SortOrderPropsType) {

    const [toggleSortDropdownVisibility, setToggleSortDropdownVisibility] = useState(false)

    const toggleDropdownSortMenu = () => {
        setToggleSortDropdownVisibility(!toggleSortDropdownVisibility)
    }

    const handleOnClickDescendingAlphaSortType = () => {
        setFetchDescendingAlphabeticOrder(true)
        setFetchDescendingPriceOrder(false)
        setFetchAscendingAlphabeticOrder(false)
        setFetchAscendingPriceOrder(false)
    }

    const handleOnClickAscendingAlphaSortType = () => {
        setFetchAscendingAlphabeticOrder(true)
        setFetchDescendingPriceOrder(false)
        setFetchDescendingAlphabeticOrder(false)
        setFetchAscendingPriceOrder(false)
    }

    const handleOnClickDescendingPriceOrder = () => {
        setFetchDescendingPriceOrder(true)
        setFetchDescendingAlphabeticOrder(false)
        setFetchAscendingAlphabeticOrder(false)
        setFetchAscendingPriceOrder(false)
    }

    const handleOnClickAscendingPriceOrder = () => {
        setFetchAscendingPriceOrder(true)
        setFetchDescendingAlphabeticOrder(false)
        setFetchAscendingAlphabeticOrder(false)
        setFetchDescendingPriceOrder(false)
    }

    return (
        <div className="p-1 bg-lime-900 rounded-xl">
            <button className="p-1 " onClick={toggleDropdownSortMenu}>Sort By</button>
            {
                toggleSortDropdownVisibility &&
                <div className="p-1 absolute top-[165px] flex flex-col">
                    <button className="p-1 bg-lime-700 cursor-pointer hover:underline" value={'name'} onClick={handleOnClickAscendingAlphaSortType}>Alphabetical A-Z</button>
                    <button className="p-1 bg-lime-700 cursor-pointer hover:underline" value={'name'} onClick={handleOnClickDescendingAlphaSortType}>Alphabetical Z-A</button>
                    <button className="p-1 bg-lime-700 cursor-pointer hover:underline" value={'price'} onClick={handleOnClickAscendingPriceOrder}>Price Ascending</button>
                    <button className="p-1 bg-lime-700 cursor-pointer hover:underline" value={'price'} onClick={handleOnClickDescendingPriceOrder}>Price Descending</button>
                </div>
            }

        </div>
    )
}