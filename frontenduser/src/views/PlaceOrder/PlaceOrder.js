import React from "react";
import {
  Grid,
  Button,
  createMuiTheme,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/components.js";
import { primaryColor } from "assets/jss/material-kit-react";

const useStyles = makeStyles(styles);

const theme = createMuiTheme({
  palette: {
    primary: { main: primaryColor }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  }
});

export default function PlaceOrder(props) {
  const { ...rest } = props;
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div>
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
              <br />
            </Grid>
            <Grid container item lg={12} md={12}>
              <Grid item lg={4} md={4}></Grid>
              <Grid item lg={4} md={4}>
                <center>
                  <Typography variant="h5" color="primary">
                    <u>PAY NOW</u>
                  </Typography>
                </center>
                <br />
              </Grid>
              <Grid item lg={4} md={4}></Grid>
            </Grid>
            <Grid container item lg={12} md={12}>
              <Grid item lg={4} md={4}></Grid>
              <Grid item lg={4} md={4}>
                <Button variant="contained" color="primary" fullWidth>
                  Pay On Cash
                </Button>
              </Grid>
              <Grid item lg={4} md={4}></Grid>
            </Grid>
            <Grid container item lg={12} md={12}>
              <br />
            </Grid>
            <Grid container item lg={12} md={12}>
              <Grid item lg={4} md={4}></Grid>
              <Grid item lg={4} md={4}>
                <Button variant="contained" color="primary" fullWidth>
                  Pay Online
                </Button>
              </Grid>
              <Grid item lg={4} md={4}></Grid>
            </Grid>
            <Grid container item lg={12} md={12}>
              <br />
              <br />
              <br />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}
