// import { supabaseApiCalls } from '../api/supabaseApiCalls'
// import { useEffect, useState } from 'react'
// import CategoryItem from '../components/CategoryItem'
// import { displayedNumberOfItems } from '../utils/numberOfItemsDisplayedAtOneTime'
// import CategoryNameAndDescription from '../components/CategoryNameAndDescription'
// import { useLocation } from 'react-router'
// import Filter from '../components/Filter'
// import SortOrder from '../components/SortOrder'





// export default function Buggiez() {

 


  
//     // const sortAToZ = () => {
//     //     const sortResult = [...buggiez].sort((a, b) => {
//     //         const nameA = a.name.toLowerCase()
//     //         const nameB = b.name.toLowerCase()
//     //         if (nameA < nameB) {
//     //             return -1
//     //         }
//     //         if (nameA > nameB) {
//     //             return 1
//     //         }
//     //         return 0
//     //     })
//     //     setBuggiez(sortResult)
//     // }

//     // const sortZToA = () => {
//     //     const sortResult = [...buggiez].sort((a, b) => {
//     //         const nameA = a.name.toLowerCase()
//     //         const nameB = b.name.toLowerCase()
//     //         if (nameB < nameA) {
//     //             return -1
//     //         }
//     //         if (nameB > nameA) {
//     //             return 1
//     //         }
//     //         return 0
//     //     })
//     //     setBuggiez(sortResult)
//     // }

//     // const sortPriceAscending = () => {
//     //     const sortResult = [...buggiez].sort((a, b) => {
//     //         return a.price - b.price
//     //     })
//     //     setBuggiez(sortResult)
//     // }

//     // const sortPriceDescending = () => {
//     //     const sortResult = [...buggiez].sort((a, b) => {
//     //         return b.price - a.price
//     //     })
//     //     setBuggiez(sortResult)
//     // }




//     return (

//         <div className='flex p-1'>
          

//             <div className='p-1 flex mr-auto flex-col items-center'>
//                 {/* <SortOrder sortAToZ={sortAToZ} sortZToA={sortZToA} sortPriceAscending={sortPriceAscending} sortPriceDescending={sortPriceDescending} /> */}
                
//                 <div className='p-2'>
//                     <span>
//                         {
//                             buggyData?.count != undefined && buggiez != undefined && `Displaying ${buggiez.length} out of ${buggyData?.count} items.`

//                         }
//                     </span>
//                 </div>
//                 {
//                     buggyData?.error && <div>Internal server error! Please refresh and try again!</div>
//                 }
//                 {
//                     isLoading ? <span>Loading data...</span> : buggiez != undefined && buggiez.map((buggy) => {
//                         return (
//                             <div key={buggy.id}>
//                                 <CategoryItem categoryItem={buggy} />
//                             </div>
//                         )
//                     })
//                 }
//                 {
//                     buggiez?.length >= visibleCartItems && <div className='p-1'>
//                         <button onClick={loadMoreProducts} className="p-1 border rounded-xl border-red-600">Load More...</button>
//                     </div>

//                 }
//             </div>
//         </div>

//     )
// }