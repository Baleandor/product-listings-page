import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import ProductListings from "./pages/ProductListings";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { useState } from 'react';
import { displayedNumberOfItems } from './utils/numberOfItemsDisplayedAtOneTime';
import SortOrder from './components/SortOrder';
import { ProductType } from './utils/types';

const queryClient = new QueryClient()

export default function App() {


  const [category, setCategory] = useState('buggiez')

  const [products, setProducts] = useState<ProductType[] | null>([])

  const [visibleCartItems, setVisibleCartItems] = useState(displayedNumberOfItems)

  const [checkboxColorFilter, setCheckboxColorFilter] = useState('')

  const [fetchPriceRange, setFetchPriceRange] = useState(false)
  const [priceRange, setPriceRange] = useState<number[]>([])

  const [fetchDescendingAlphabeticOrder, setFetchDescendingAlphabeticOrder] = useState(false)
  const [fetchDescendingPriceOrder, setFetchDescendingPriceOrder] = useState(false)

  const [fetchAscendingAlphabeticOrder, setFetchAscendingAlphabeticOrder] = useState(false)
  const [fetchAscendingPriceOrder, setFetchAscendingPriceOrder] = useState(false)



  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-lime-800 flex flex-col">

        <div className="sticky top-0 bg-lime-900 z-10">
          <Navbar category={category} setCategory={setCategory} setVisibleCartItems={setVisibleCartItems} />
        </div>
        <div className='p-1 flex flex-col'>
          <Filter
            setCheckboxColorFilter={setCheckboxColorFilter}
            setPriceRange={setPriceRange}
            setFetchPriceRange={setFetchPriceRange}
          />
        </div>
        <div className="p-1 flex flex-col m-auto items-center">



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
        <Footer />
      </div>

    </QueryClientProvider>
  )

}


