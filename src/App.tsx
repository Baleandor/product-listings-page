import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import ProductListings from "./pages/ProductListings";


export default function App() {

  const queryClient = new QueryClient()

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Root />} errorElement={<NotFound />}>
      <Route index element={<ProductListings />} />

    </Route>
  ))



  return (
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
    </QueryClientProvider>
  )

}


