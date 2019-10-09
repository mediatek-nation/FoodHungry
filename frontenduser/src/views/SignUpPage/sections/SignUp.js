import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage";
import { primaryColor } from "assets/jss/material-kit-react";
import { ThemeProvider } from "@material-ui/styles";

import { Grid, TextField, Button } from "@material-ui/core";

import FoodCart from "components/FoodCart/FoodCart";

function TabPanel(props) {
  const classes = useStyles();
  return (
    <div style={{ overflow: "hidden" }}>
      <Grid container lg={12} md={12}>
        <Grid container item lg={4} md={4}></Grid>
        <Grid container item lg={4} md={4} style={{ paddingBottom: "5vh" }}>
          <form className={classes.container}>
            <Grid container item lg={12} direction="vertical">
              <Grid container item lg={12}>
                <Grid item lg={4} />
                <Grid item lg={4}>
                  <TextField
                    id="outlined-email-input"
                    label="Email Address"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item lg={4} />
              </Grid>
              <Grid container item lg={12}>
                <Grid item lg={4} />
                <Grid item lg={4}>
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item lg={4} />
              </Grid>
              <Grid container item lg={12}>
                <Grid item lg={4} />
                <Grid item lg={4}>
                  <TextField
                    id="outlined-mobile-input"
                    label="Phone No."
                    className={classes.textField}
                    type="number"
                    name="phnno"
                    autoComplete="phone"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item lg={4} />
              </Grid>
              <Grid container item lg={12}>
                <Grid item lg={4} />
                <Grid item lg={4}>
                  <TextField
                    id="outlined-name-input"
                    label="Full Name"
                    className={classes.textField}
                    type="text"
                    name="uname"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item lg={4} />
              </Grid>
              <Grid container item lg={12}>
                <Grid item lg={4} />
                <Grid item lg={4}>
                  <TextField
                    id="outlined-address-input"
                    label="Current Address"
                    className={classes.textField}
                    type="text"
                    name="address"
                    autoComplete="address"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item lg={4} />
              </Grid>
              <Grid container item lg={12}>
                <Grid item lg={4} />
                <Grid item lg={4}>
                  <label htmlFor="contained-button-submit">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className={classes.button}
                    >
                      Sign Up
                    </Button>
                  </label>
                </Grid>
                <Grid item lg={4} />
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid container item lg={4} md={4}></Grid>
      </Grid>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`
  };
}

const useStyles = makeStyles(styles);

function SignUp(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryColor
      },
      secondary: {
        main: "#f44336"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <FoodCart />
      <div className={classes.root}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}></TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}></TabPanel>
        </SwipeableViews>
      </div>
    </ThemeProvider>
  );
}

export default withRouter(SignUp);
