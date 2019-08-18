import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

// redux component
import { Provider } from "react-redux";
import store from "./store";

// other components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

// user components
import RestaurantDetails from "./components/user/restaurant/RestaurantDetails";
import Cart from "./components/user/cart/Cart";
import Payment from "./components/user/payment/Payment";
import Register from "./components/user/auth/Register";
import Login from "./components/user/auth/Login";
import Profile from "./components/user/profile/Profile";
import ForgotPass from "./components/user/auth/ForgotPass";
import ResetPass from "./components/user/auth/ResetPass";
import PastOrders from "./components/user/orders/PastOrders";
import UpcomingOrders from "./components/user/orders/UpcomingOrders";
import OrderDetails from "./components/user/orders/OrderDetails";
import OrderStatus from "./components/user/orders/OrderStatus";
import CancelOrder from "./components/user/orders/CancelOrder";

// restaurant components
import Dashboard from "./components/restaurant/dashboard/Dashboard";
import AddFood from "./components/restaurant/foodmgmt/AddFood";
import FoodDetails from "./components/restaurant/foodmgmt/FoodDetails";
import FoodList from "./components/restaurant/foodmgmt/FoodList";
import FoodCategoryList from "./components/restaurant/categorymgmt/FoodCategoryList";
import AddFoodCategory from "./components/restaurant/categorymgmt/AddFoodCategory";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />

          {/** User Portion */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/restaurantdet" component={RestaurantDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/forgotpass" component={ForgotPass} />
          <Route exact path="/resetpass" component={ResetPass} />
          <Route exact path="/pastorders" component={PastOrders} />
          <Route exact path="/upcomingorders" component={UpcomingOrders} />
          <Route exact path="/orderdetails" component={OrderDetails} />
          <Route exact path="/orderstatus" component={OrderStatus} />
          <Route exact path="/cancelorder" component={CancelOrder} />

          {/** Restaurant Admin */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/foodlist" component={FoodList} />
          <Route exact path="/addnewfood" component={AddFood} />
          <Route exact path="/fooddetails" component={FoodDetails} />
          <Route exact path="/foodcategorylist" component={FoodCategoryList} />
          <Route exact path="/addnewfoodcategory" component={AddFoodCategory} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
