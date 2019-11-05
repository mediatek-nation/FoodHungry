import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const UserPrivateRoute = ({component: Component, auth, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            auth.isAuthenticate === true ? (
                auth.user.actor === "user" ? (
                    <Component {...props} />
                ) : (
                    auth.user.actor === "restadmin" ? (
                        <Redirect to={props.history.goBack()} />
                    ) : (
                        <Redirect to="/courier" />
                    )
                )
             ) : (
                <Component {...props} />
             )
        }
    />
);

UserPrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(UserPrivateRoute);