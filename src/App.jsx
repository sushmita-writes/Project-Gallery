import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import AllProducts from './pages/AllProducts';
import Artists from './pages/Artists';
import Trending from './pages/Trending';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import { productLoader } from './loaders/productLoader';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/products/:id" element={<ProductDetail />} loader={productLoader}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
