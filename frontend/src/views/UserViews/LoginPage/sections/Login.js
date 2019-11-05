import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styles from "assets/jss/user-kit/views/loginPage";
import { primaryColor } from "assets/jss/user-kit";
import { ThemeProvider } from "@material-ui/styles";

import { Grid, TextField, Button, Typography } from "@material-ui/core";

import FoodCart from "components/UserComponents/FoodCart/FoodCart";

// redux include
import { connect } from "react-redux";
import { loginUser, loginRestAdmin } from "actions/authActions";

function TabPanel(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();

  useEffect(() => {
    setErrors(props.errors.error);
  }, [props.errors]);

  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      email,
      password
    };
    if (props.index === 0) props.loginUser(userData);
    if (props.index === 1) props.loginRestAdmin(userData);
  };

  if (props.auth.isAuthenticate) {
    props.auth.user.actor === "user"
      ? props.history.push("/")
      : props.auth.user.actor === "restadmin"
      ? props.history.push("/restadmin")
      : props.history.push("/courier");
  }

  const classes = useStyles();
  const link = `/signup/${props.value}`;
  return (
    <div style={{ overflow: "hidden" }}>
      <Grid container lg={12} md={12}>
        <Grid container item lg={2} md={4}></Grid>
        <Grid container item lg={6} md={4} style={{ paddingBottom: "5vh" }}>
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
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    error={errors !== undefined ? errors.email : false}
                    helperText={errors !== undefined ? errors.email : ""}
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
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    error={errors !== undefined ? errors.password : false}
                    helperText={errors !== undefined ? errors.password : ""}
                  />
                </Grid>
                <Grid item lg={4} />
              </Grid>
              <Grid container item lg={12}>
                <Grid item lg={4}></Grid>
                <Grid item lg={8}>
                  <Typography color="primary">
                    <u>Forgot Password?</u>
                  </Typography>
                </Grid>
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
                      onClick={onSubmit}
                    >
                      Sign In
                    </Button>
                  </label>
                </Grid>
                <Grid item lg={4} />
              </Grid>
            </Grid>
          </form>
          <Grid item lg={10} md={6}>
            <Typography variant="subtitle1">A New User ?</Typography>
          </Grid>
          <Grid item lg={2} md={6}>
            <a href={link}>
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
          <TabPanel
            value={value}
            index={0}
            dir={theme.direction}
            {...props}
          ></TabPanel>
          <TabPanel
            value={value}
            index={1}
            dir={theme.direction}
            {...props}
          ></TabPanel>
          <TabPanel
            value={value}
            index={2}
            dir={theme.direction}
            {...props}
          ></TabPanel>
        </SwipeableViews>
      </div>
    </ThemeProvider>
  );
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loginRestAdmin: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser, loginRestAdmin }
)(withRouter(Login));
