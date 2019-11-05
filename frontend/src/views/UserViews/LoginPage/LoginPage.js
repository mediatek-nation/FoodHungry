import React, {useEffect} from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

// material-ui components
import {
  Grid,
  createMuiTheme,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/UserComponents/Header/Header";
import HeaderLinks from "components/UserComponents/Header/HeaderLinks";
import Footer from "components/UserComponents/Footer/Footer";

// section components
import Login from "./sections/Login";

// styles
import styles from "assets/jss/user-kit/views/components.js";
import { primaryColor } from "assets/jss/user-kit.js";

// react redux connection
import {connect} from 'react-redux';

const useStyles = makeStyles(styles);

const theme = createMuiTheme({
  palette: {
    primary: { main: primaryColor }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  }
});

function LoginPage(props) {

  useEffect(() => {
    if(props.auth.isAuthenticate) {
      if(props.auth.user.actor === "restadmin") {
        window.location.href = "/restadmin";
      }
    }
  });

  const { ...rest } = props;
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div style={{ overflow: "hidden" }}>
        <Header
          brand="FoodHungry"
          rightLinks={<HeaderLinks />}
          fixed
          {...rest}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <Grid container lg={12} md={12}>
            <Grid container item lg={12} md={12}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Grid>
            <Grid container item lg={12} md={12}>
              <Grid item lg={4} md={4}></Grid>
              <Grid item lg={4} md={4}>
                <center>
                  <Typography variant="h5" color="primary">
                    <u>Sign In</u>
                  </Typography>
                </center>
                <br />
              </Grid>
              <Grid item lg={4} md={4}></Grid>
            </Grid>
            <Grid container item lg={12} md={12}>
              <center>
                <Login />
              </center>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(LoginPage);