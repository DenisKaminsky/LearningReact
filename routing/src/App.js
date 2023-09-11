import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ErrorPage from './pages/Error';
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true, //default path for parent
        element: <HomePage />
      },
      {
        path: 'products',
        element: <ProductsPage />
      },
      {
        path: 'products/:id',
        element: <ProductDetailPage />
      }
    ],
    errorElement: <ErrorPage/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
