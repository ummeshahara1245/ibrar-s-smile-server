import './App.css';
import Home from './pages/Home/Home/Home';
import OrderReview from './pages/OrderReview/OrderReview';
import OrderPlace from './pages/OrderPlace/OrderPlace';
import Footer from './Shares/Footer/Footer';
import Header from './Shares/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/DashBoard/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Booking from './pages/Booking/Booking';
import AddService from './pages/DashBoard/AddService/AddService';
import ManageBookings from './pages/DashBoard/MannageBooking/MannageBooking';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import MakeAdmin from './pages/DashBoard/MakeAdmin/MakeAdmin';
import Pay from './pages/Pay/Pay';
import Explore from './pages/Home/Home/Explore/Explore';
import UserReviews from './pages/UserReviews/UserReviews';
import AllServices from './pages/DashBoard/AllServices/AllServices';
import ProductSlides from './pages/ProductSlides/ProductSlides'
import MannageBooking from './pages/DashBoard/MannageBooking/MannageBooking';
import ManageAllOrders from './pages/DashBoard/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
       
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/manageProduct">
            <AllServices />
          </Route>
          <Route path="/manageAllOrder">
          <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path="/pay">
            <Pay/>
          </Route>
          <Route path="/explore">
            <Explore/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <ManageBookings />
          </PrivateRoute>
          <PrivateRoute path="/orderReview/:id">
            <OrderReview />
            <ProductSlides/>
          </PrivateRoute>
          <PrivateRoute path="/booking">
            <Booking />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/orderPlace">
            <OrderPlace />
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <UserReviews />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
