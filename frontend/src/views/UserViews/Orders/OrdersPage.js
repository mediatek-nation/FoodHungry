import React from "react";
import classNames from "classnames";

// material ui components
import {
  Grid,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/UserComponents/Header/Header";
import HeaderLinks from "components/UserComponents/Header/HeaderLinks";
import Footer from "components/UserComponents/Footer/Footer";

// section components
import Orders from "./sections/Orders";

// styles
import styles from "assets/jss/user-kit/views/components.js";
import { primaryColor } from "assets/jss/user-kit";

const useStyles = makeStyles(styles);

const theme = createMuiTheme({
  palette: {
    primary: { main: primaryColor }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  }
});

function OrdersPage(props) {

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
            </Grid>
            <Grid container item lg={12} md={12}>
              <Orders />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default OrdersPage;