import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from '../App';
import HomeScreen from '../screens/Home/HomeScreen';
import ProductScreen from '../screens/Product/ProductScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
