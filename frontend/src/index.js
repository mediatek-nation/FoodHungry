import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

// pages for this product
import Components from 'views/Components/Components.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import Restaurant from 'views/RestaurantDetails/Restaurant';
import PlaceOrder from 'views/PlaceOrder/PlaceOrder';
import { Provider } from 'react-redux';
import store from 'store';
import CityRestaurants from 'views/CityRestaurants/CityRestaurants';

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route exact path='/location' component={LandingPage} />
        <Route exact path='/profile-page' component={ProfilePage} />
        <Route exact path='/login-page' component={LoginPage} />
        <Route exact path='/restaurant' component={Restaurant} />
        <Route exact path='/cityrestaurants' component={CityRestaurants} />
        <Route exact path='/placeorder' component={PlaceOrder} />
        <Route exact path='/' component={Components} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
