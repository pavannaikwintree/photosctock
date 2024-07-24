import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import { HomePage, PricingPage, LoginPage, RegisterPage } from "./pages/index"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/pricing",
          element: <PricingPage />,
        },

      ],
    },
    {
      path: "/account/login",
      element: <LoginPage />,
    },
    {
      path: "/account/Register",
      element: <RegisterPage />,
    }
  ])


  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
