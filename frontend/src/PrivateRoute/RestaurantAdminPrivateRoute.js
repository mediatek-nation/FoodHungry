import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const RestaurantAdminPrivateRoute = ({
  component: Component,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticate === true ? (
        auth.user.actor === "restadmin" ? (
          <Component {...props} />
        ) : auth.user.actor === "user" ? (
          <Redirect to={props.history.goBack()} />
        ) : (
          <Redirect to="/courier" />
        )
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

RestaurantAdminPrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(RestaurantAdminPrivateRoute);
