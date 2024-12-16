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
import CartScreen from '../screens/Cart/CartScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import ShippingScreen from '../screens/Shipping/ShippingScreen';
import PrivateRoute from './routes/PrivateRoute';
import PaymentScreen from '../screens/Payment/PaymentScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
      </Route>
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
