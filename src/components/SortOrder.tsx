import { useState } from "react"


type SortOrderPropsType = {
    setSortAscendingType: React.Dispatch<React.SetStateAction<string>>,
    setFetchAscendingOrder: React.Dispatch<React.SetStateAction<boolean>>,
    setSortDescendingType: React.Dispatch<React.SetStateAction<string>>,
    setFetchDescendingOrder: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SortOrder({ setSortAscendingType, setFetchAscendingOrder, setSortDescendingType, setFetchDescendingOrder }: SortOrderPropsType) {

    const [toggleSortDropdownVisibility, setToggleSortDropdownVisibility] = useState(false)

    const toggleDropdownSortMenu = () => {
        setToggleSortDropdownVisibility(!toggleSortDropdownVisibility)
    }

    const handleOnClickAscendingSortType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSortAscendingType((e.target as HTMLInputElement).value)
        setFetchAscendingOrder(true)
    }

    const handleOnClickDescendingSortType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSortDescendingType((e.target as HTMLInputElement).value)
        setFetchDescendingOrder(true)
    }

    return (
        <div className="p-1 bg-lime-900 rounded-xl">
            <button className="p-1 " onClick={toggleDropdownSortMenu}>Sort By</button>
            {
                toggleSortDropdownVisibility &&
                <div className="p-1 absolute top-[165px] flex flex-col">
                    <button className="p-1 bg-lime-700 cursor-pointer hover:underline" value={'name'} onClick={handleOnClickAscendingSortType}>Alphabetical A-Z</button>
                    <button className="p-1 bg-lime-700 cursor-pointer hover:underline" value={'name'} onClick={handleOnClickDescendingSortType}>Alphabetical Z-A</button>
                    <button className="p-1 bg-lime-700 cursor-pointer hover:underline" value={'price'} onClick={handleOnClickAscendingSortType}>Price Ascending</button>
                    <button className="p-1 bg-lime-700 cursor-pointer hover:underline" value={'price'} onClick={handleOnClickDescendingSortType}>Price Descending</button>
                </div>
            }

        </div>
    )
}


// Alphabetical a-z
// ii. Alphabetical z-a
// iii. Price ascending.
// iv. Price descending.