import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

// styles
// style for User Views
import "assets/scss/material-kit-react.scss?v=1.8.0";
// style for Restaurant Admin Views
import "assets/css/material-dashboard-react.css?v=1.8.0";

// User Views
import Components from "views/UserViews/Components/Components.js";
import LandingPage from "views/UserViews/LandingPage/LandingPage.js";
import ProfilePage from "views/UserViews/ProfilePage/ProfilePage.js";
import LoginPage from "views/UserViews/LoginPage/LoginPage.js";
import Restaurant from "views/UserViews/RestaurantDetails/Restaurant";
import PlaceOrder from "views/UserViews/PlaceOrder/PlaceOrder";
import CityRestaurants from "views/UserViews/CityRestaurants/CityRestaurants";
import SignUpPage from "views/UserViews/SignUpPage/SignUpPage";
import OrdersPage from "views/UserViews/Orders/OrdersPage";
import OrderDetails from "views/UserViews/Orders/OrderDetails";
import GoogleMap from "views/UserViews/GoogleMap/GoogleMap";

// Restaurant Admin Layouts
import Admin from "layouts/RestAdminLayouts/Admin.js";
import RTL from "layouts/RestAdminLayouts/RTL.js";

// redux connection
import { Provider } from "react-redux";
import store from "store";

// redux action required for login after loading the app
import { SET_CURRENT_USER } from "actions/types";

// utility method for backend header
import setAuthToken from "utils/setAuthToken";

// To Private the routes for User
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import RestaurantAdminPrivateRoute from "PrivateRoute/RestaurantAdminPrivateRoute";

var hist = createBrowserHistory();

if (localStorage.jwtToken) {
  // set token to Auth Header
  setAuthToken(localStorage.jwtToken);
  // decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  // set current user
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded
  });
  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout User
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {/* User Routes */}
        <Route exact path="/" component={Components} />
        <UserPrivateRoute exact path="/location" component={LandingPage} />
        <Route exact path="/login-page" component={LoginPage} />
        <Route exact path="/signup/:id" component={SignUpPage} />
        <UserPrivateRoute exact path="/restaurant" component={Restaurant} />
        <UserPrivateRoute
          exact
          path="/cityrestaurants"
          component={CityRestaurants}
        />
        <UserPrivateRoute exact path="/placeorder" component={PlaceOrder} />
        <UserPrivateRoute exact path="/orders" component={OrdersPage} />
        <UserPrivateRoute exact path="/orderdet" component={OrderDetails} />
        <UserPrivateRoute exact path="/google-map" component={GoogleMap} />
        <Route exact path="/profile-page" component={ProfilePage} />

        {/* Restaurant Admin Routes */}
        <Redirect from="/restadmin" to="/admin/dashboard" />
        <RestaurantAdminPrivateRoute path="/admin" component={Admin} />
        <RestaurantAdminPrivateRoute path="/rtl" component={RTL} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
