import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styles from "assets/jss/material-kit-react/views/loginPage";
import { primaryColor } from "assets/jss/material-kit-react";
import { ThemeProvider } from "@material-ui/styles";

import { Grid, TextField, Button, Typography } from "@material-ui/core";

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
                <Typography color="primary">
                  <u>Forgot Password?</u>
                </Typography>
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
                      Sign In
                    </Button>
                  </label>
                </Grid>
                <Grid item lg={4} />
              </Grid>
            </Grid>
          </form>
          <Grid item lg={6} md={6}>
            <Typography variant="subtitle1">A New User ?</Typography>
          </Grid>
          <Grid item lg={6} md={6}>
            <a href="/signup">
              <Typography color="primary">
                <u>Sign Up</u>
              </Typography>
            </a>
          </Grid>
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

function Login(props) {
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
        <AppBar
          position="static"
          color="default"
          style={{ width: theme.spacing(60) }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="action tabs example"
          >
            <Tab label="User" {...a11yProps(0)} />
            <Tab label="Restaurant" {...a11yProps(1)} />
            <Tab label="Courier" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
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

export default withRouter(Login);
