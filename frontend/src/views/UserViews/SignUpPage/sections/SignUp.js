import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import styles from "assets/jss/user-kit/views/loginPage";
import { primaryColor } from "assets/jss/user-kit";
import { ThemeProvider } from "@material-ui/styles";

import { Grid, TextField, Button } from "@material-ui/core";

import FoodCart from "components/UserComponents/FoodCart/FoodCart";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser, loginRestAdmin } from "actions/authActions";

function TabPanel(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phnno, setPhnno] = useState("");
  const [uname, setUname] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignUp = e => {
    e.preventDefault();
    const userData = {
      name: uname,
      email,
      password,
      password2,
      mobno: phnno,
      address
    };
    if (props.value === "0") {
      axios
        .post("/api/auth/user/register", userData)
        .then(res => {
          const user = {
            email: res.data.email,
            password: userData.password
          };
          props.loginUser(user);
          props.history.push("/");
        })
        .catch(err => setErrors(err.response.data));
    }
    if (props.value === "1") {
      axios
        .post("/api/auth/restadmin/register", userData)
        .then(res => {
          const restadmin = {
            email: res.data.email,
            password: userData.password
          };
          props.loginRestAdmin(restadmin);
        })
        .catch(err => setErrors(err.response.data));
    }
  };

  const classes = useStyles();

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
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    error={errors.email}
                    helperText={errors.email !== "" ? errors.email : ""}
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
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    error={errors.password}
                    helperText={errors.password !== "" ? errors.password : ""}
                  />
                </Grid>
                <Grid item lg={4} />
              </Grid>
              <Grid container item lg={12}>
                <Grid item lg={4} />
                <Grid item lg={4}>
                  <TextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    className={classes.textField}
                    onChange={e => setPassword2(e.target.value)}
                    type="password"
                    name="password2"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    error={errors.password2}
                    helperText={errors.password2 !== "" ? errors.password2 : ""}
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
                    onChange={e => {
                      setPhnno(e.target.value);
                    }}
                    type="number"
                    name="phnno"
                    autoComplete="phone"
                    margin="normal"
                    variant="outlined"
                    error={errors.mobno}
                    helperText={errors.mobno !== "" ? errors.mobno : ""}
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
                    onChange={e => {
                      setUname(e.target.value);
                    }}
                    type="text"
                    name="uname"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    error={errors.name}
                    helperText={errors.name !== "" ? errors.name : ""}
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
                    onChange={e => setAddress(e.target.value)}
                    type="text"
                    name="address"
                    autoComplete="address"
                    margin="normal"
                    variant="outlined"
                    error={errors.address}
                    helperText={errors.address !== "" ? errors.address : ""}
                  />
                </Grid>
                <Grid item lg={4} />
              </Grid>
              <Grid container item lg={12}>
                <Grid item lg={4} />
                <Grid item lg={4}>
                  <label
                    htmlFor="contained-button-submit"
                    onClick={e => handleSignUp(e)}
                  >
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

const useStyles = makeStyles(styles);

function SignUp(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
          <TabPanel
            value={props.value}
            index={0}
            dir={theme.direction}
            {...props}
          ></TabPanel>
          <TabPanel
            value={props.value}
            index={1}
            dir={theme.direction}
            {...props}
          ></TabPanel>
          <TabPanel
            value={props.value}
            index={2}
            dir={theme.direction}
            {...props}
          ></TabPanel>
        </SwipeableViews>
      </div>
    </ThemeProvider>
  );
}

SignUp.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loginRestAdmin: PropTypes.func.isRequired
};

export default connect(
  null,
  { loginUser, loginRestAdmin }
)(withRouter(SignUp));
