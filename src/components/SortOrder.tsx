import { useState } from "react"

type SortOrderPropsType = {
    sortAToZ: () => void,
    sortZToA: () => void,
    sortPriceAscending: () => void,
    sortPriceDescending: () => void
}

export default function SortOrder({ sortAToZ, sortZToA,sortPriceAscending, sortPriceDescending }: SortOrderPropsType) {

    const [toggleSortDropdownVisibility, setToggleSortDropdownVisibility] = useState(false)

    const toggleDropdownSortMenu = () => {
        setToggleSortDropdownVisibility(!toggleSortDropdownVisibility)
    }



    return (
        <div className="p-1 bg-lime-900 rounded-xl">
            <button className="p-1 " onClick={toggleDropdownSortMenu}>Sort By</button>
            {
                toggleSortDropdownVisibility &&
                <ul className="p-1 absolute top-[165px]">
                    <li className="p-1 bg-lime-700 cursor-pointer hover:underline" onClick={sortAToZ}>Alphabetical A-Z</li>
                    <li className="p-1 bg-lime-700 cursor-pointer hover:underline" onClick={sortZToA}>Alphabetical Z-A</li>
                    <li className="p-1 bg-lime-700 cursor-pointer hover:underline" onClick={sortPriceAscending}>Price Ascending</li>
                    <li className="p-1 bg-lime-700 cursor-pointer hover:underline" onClick={sortPriceDescending}>Price Descending</li>
                </ul>
            }

        </div>
    )
}


// Alphabetical a-z
// ii. Alphabetical z-a
// iii. Price ascending.
// iv. Price descending.