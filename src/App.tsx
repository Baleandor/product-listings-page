import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import Buggiez from "./pages/Buggiez";
import Gunz from "./pages/Gunz";
import { ROUTE_PATH } from "./utils/urls";
import ProductListings from "./pages/ProductListings";


export default function App() {

  const queryClient = new QueryClient()

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Root />} errorElement={<NotFound />}>
      <Route index element={<ProductListings />} />
      <Route element={<Buggiez />} path={ROUTE_PATH.BUGGIEZ} />
      <Route element={<Gunz />} path={ROUTE_PATH.GUNZ} />
    </Route>
  ))



  return (
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
    </QueryClientProvider>
  )

}


