import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import ProductListings from "./pages/ProductListings";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { useState } from 'react';
import { displayedNumberOfItems } from './utils/numberOfItemsDisplayedAtOneTime';
import SortOrder from './components/SortOrder';
import { productType } from './utils/types';


export default function App() {

  const queryClient = new QueryClient()

  const [category, setCategory] = useState('buggiez')

  const [products, setProducts] = useState<productType[] | null>([])

  const [visibleCartItems, setVisibleCartItems] = useState(displayedNumberOfItems)

  const [checkboxColorFilter, setCheckboxColorFilter] = useState('')

  const [fetchPriceRange, setFetchPriceRange] = useState(false)
  const [priceRange, setPriceRange] = useState<number[]>([])

  const [fetchDescendingAlphabeticOrder, setFetchDescendingAlphabeticOrder] = useState(false)
  const [fetchDescendingPriceOrder, setFetchDescendingPriceOrder] = useState(false)

  const [fetchAscendingAlphabeticOrder, setFetchAscendingAlphabeticOrder] = useState(false)
  const [fetchAscendingPriceOrder, setFetchAscendingPriceOrder] = useState(false)

  console.log('rendered in app')

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
              setFetchDescendingAlphabeticOrder={setFetchDescendingAlphabeticOrder}
              setFetchDescendingPriceOrder={setFetchDescendingPriceOrder}
              setFetchAscendingAlphabeticOrder={setFetchAscendingAlphabeticOrder}
              setFetchAscendingPriceOrder={setFetchAscendingPriceOrder}
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
              fetchDescendingAlphabeticOrder={fetchDescendingAlphabeticOrder}
              fetchAscendingAlphabeticOrder={fetchAscendingAlphabeticOrder}
              fetchDescendingPriceOrder={fetchDescendingPriceOrder}
              fetchAscendingPriceOrder={fetchAscendingPriceOrder}
            />
          </div>
        </div>
        <Footer />
      </div>

    </QueryClientProvider>
  )

}


