import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import ProductListings from "./pages/ProductListings";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { useState } from 'react';
import { displayedNumberOfItems } from './utils/numberOfItemsDisplayedAtOneTime';
import SortOrder from './components/SortOrder';


export default function App() {

  const queryClient = new QueryClient()



  const [products, setProducts] = useState([])

  const [visibleCartItems, setVisibleCartItems] = useState(displayedNumberOfItems)

  const [category, setCategory] = useState('buggiez')
  const [checkboxColorFilter, setCheckboxColorFilter] = useState('')
  const [fetchPriceRange, setFetchPriceRange] = useState(false)
  const [priceRange, setPriceRange] = useState<number[]>([])
  const [sortAscendingType, setSortAscendingType] = useState('')
  const [sortDescendingType, setSortDescendingType] = useState('')
  const [fetchAscendingOrder, setFetchAscendingOrder] = useState(false)
  const [fetchDescendingOrder, setFetchDescendingOrder] = useState(false)




  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-lime-800 ">
        <div className="sticky top-0 bg-lime-900 z-10">
          <Navbar category={category} setCategory={setCategory} setVisibleCartItems={setVisibleCartItems} />
        </div>
        <div className="p-1 flex mr-auto  items-center">

          <Filter
            setCheckboxColorFilter={setCheckboxColorFilter}
            setPriceRange={setPriceRange}
            setFetchPriceRange={setFetchPriceRange}
          />
          <div className='p-1 flex flex-col mr-auto  items-center'>
            <SortOrder
              setSortAscendingType={setSortAscendingType}
              setFetchAscendingOrder={setFetchAscendingOrder}
              setFetchDescendingOrder={setFetchDescendingOrder}
              setSortDescendingType={setSortDescendingType}
            />

            <ProductListings
              category={category}
              products={products}
              setProducts={setProducts}
              visibleCartItems={visibleCartItems}
              setVisibleCartItems={setVisibleCartItems}
              checkboxColorFilter={checkboxColorFilter}
              priceRange={priceRange}
              fetchPriceRange={fetchPriceRange}
              sortAscendingType={sortAscendingType}
              fetchAscendingOrder={fetchAscendingOrder}
              fetchDescendingOrder={fetchDescendingOrder}
              sortDescendingType={sortDescendingType}
            />
          </div>

        </div>
        <Footer />
      </div>

    </QueryClientProvider>
  )

}


