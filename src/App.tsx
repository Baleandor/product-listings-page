import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'


export default function App() {

  const queryClient = new QueryClient()

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Root />} errorElement={<NotFound />}>

    </Route>
  ))



  return (
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
    </QueryClientProvider>
  )

}


