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

import { Grid, Typography, Paper, Button } from "@material-ui/core";

import FoodCart from "components/FoodCart/FoodCart";

const theme = createMuiTheme();

function TabPanel(props) {
  const classes = useStyles();
  if (props.index == 1) {
    return (
      <div style={{ overflow: "hidden" }}>
        <Grid container lg={12} md={12} spacing={2}>
          <Grid container item lg={12} md={12}>
            <Paper
              className={classes.root}
              style={{ background: "#F5F5F5", width: theme.spacing(140) }}
            >
              <Grid container lg={12} md={12}>
                <Grid item lg={5} md={5}>
                  <img
                    src={require("../../../assets/img/bg1.jpg")}
                    alt="Restaurant 1"
                    width="250"
                  />
                </Grid>
                <Grid item lg={7} md={7}>
                  <Typography variant="h4">Imperio Restaurant</Typography>
                  <Typography variant="subtitle1">
                    Kundallahali, Whitefield, Bengaluru
                  </Typography>
                  <Typography variant="subtitle2">
                    1 item for ₹ 130.00 • 27 Sep at 02:46 pm •{" "}
                    <a href="#">View receipt</a>
                  </Typography>
                  <Typography variant="subtitle2">
                    1. Non Veg Executive Thali
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid container item lg={12} md={12}>
            <Paper
              className={classes.root}
              style={{ background: "#F5F5F5", width: theme.spacing(140) }}
            >
              <Grid container lg={12} md={12}>
                <Grid item lg={5} md={5}>
                  <img
                    src={require("../../../assets/img/bg1.jpg")}
                    alt="Restaurant 1"
                    width="250"
                  />
                </Grid>
                <Grid item lg={7} md={7}>
                  <Typography variant="h4">Imperio Restaurant</Typography>
                  <Typography variant="subtitle1">
                    Kundallahali, Whitefield, Bengaluru
                  </Typography>
                  <Typography variant="subtitle2">
                    1 item for ₹ 130.00 • 27 Sep at 02:46 pm •{" "}
                    <a href="#">View receipt</a>
                  </Typography>
                  <Typography variant="subtitle2">
                    1. Non Veg Executive Thali
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid container item lg={12} md={12}>
            <Paper
              className={classes.root}
              style={{ background: "#F5F5F5", width: theme.spacing(140) }}
            >
              <Grid container lg={12} md={12}>
                <Grid item lg={5} md={5}>
                  <img
                    src={require("../../../assets/img/bg1.jpg")}
                    alt="Restaurant 1"
                    width="250"
                  />
                </Grid>
                <Grid item lg={7} md={7}>
                  <Typography variant="h4">Imperio Restaurant</Typography>
                  <Typography variant="subtitle1">
                    Kundallahali, Whitefield, Bengaluru
                  </Typography>
                  <Typography variant="subtitle2">
                    1 item for ₹ 130.00 • 27 Sep at 02:46 pm •{" "}
                    <a href="#">View receipt</a>
                  </Typography>
                  <Typography variant="subtitle2">
                    1. Non Veg Executive Thali
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div style={{ overflow: "hidden" }}>
        <Grid container lg={12} md={12} spacing={2}>
          <Grid container item lg={12} md={12}>
            <Paper
              className={classes.root}
              style={{ background: "#F5F5F5", width: theme.spacing(140) }}
            >
              <Grid container lg={12} md={12}>
                <Grid item lg={5} md={5}>
                  <img
                    src={require("../../../assets/img/bg1.jpg")}
                    alt="Restaurant 1"
                    width="250"
                  />
                </Grid>
                <Grid item lg={7} md={7}>
                  <Typography variant="h4">Imperio Restaurant</Typography>
                  <Typography variant="subtitle1">
                    Kundallahali, Whitefield, Bengaluru
                  </Typography>
                  <Typography variant="subtitle2">
                    1 item for ₹ 130.00 • 27 Sep at 02:46 pm •{" "}
                    <a href="#">View receipt</a>
                  </Typography>
                  <Typography variant="subtitle2">
                    1. Non Veg Executive Thali
                  </Typography>
                  <br />
                  <Button
                    variant="contained"
                    onClick={() => {
                      props.history.push("/orderdet");
                    }}
                    color="primary"
                  >
                    <Typography>View Details</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid container item lg={12} md={12}>
            <Paper
              className={classes.root}
              style={{ background: "#F5F5F5", width: theme.spacing(140) }}
            >
              <Grid container lg={12} md={12}>
                <Grid item lg={5} md={5}>
                  <img
                    src={require("../../../assets/img/bg1.jpg")}
                    alt="Restaurant 1"
                    width="250"
                  />
                </Grid>
                <Grid item lg={7} md={7}>
                  <Typography variant="h4">Imperio Restaurant</Typography>
                  <Typography variant="subtitle1">
                    Kundallahali, Whitefield, Bengaluru
                  </Typography>
                  <Typography variant="subtitle2">
                    1 item for ₹ 130.00 • 27 Sep at 02:46 pm •{" "}
                    <a href="#">View receipt</a>
                  </Typography>
                  <Typography variant="subtitle2">
                    1. Non Veg Executive Thali
                  </Typography>
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      props.history.push("/orderdet");
                    }}
                  >
                    <Typography>View Details</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid container item lg={12} md={12}>
            <Paper
              className={classes.root}
              style={{ background: "#F5F5F5", width: theme.spacing(140) }}
            >
              <Grid container lg={12} md={12}>
                <Grid item lg={5} md={5}>
                  <img
                    src={require("../../../assets/img/bg1.jpg")}
                    alt="Restaurant 1"
                    width="250"
                  />
                </Grid>
                <Grid item lg={7} md={7}>
                  <Typography variant="h4">Imperio Restaurant</Typography>
                  <Typography variant="subtitle1">
                    Kundallahali, Whitefield, Bengaluru
                  </Typography>
                  <Typography variant="subtitle2">
                    1 item for ₹ 130.00 • 27 Sep at 02:46 pm •{" "}
                    <a href="#">View receipt</a>
                  </Typography>
                  <Typography variant="subtitle2">
                    1. Non Veg Executive Thali
                  </Typography>
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      props.history.push("/orderdet");
                    }}
                  >
                    <Typography>View Details</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
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

function Orders(props) {
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
          style={{ width: theme.spacing(140) }}
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
            <Tab label="Upcoming Orders" {...a11yProps(0)} />
            <Tab label="Past Orders" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <br />
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
        </SwipeableViews>
        <br />
      </div>
    </ThemeProvider>
  );
}

export default withRouter(Orders);
