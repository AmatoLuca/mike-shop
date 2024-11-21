import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default Router;
