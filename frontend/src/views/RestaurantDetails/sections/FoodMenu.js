import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import Cart from "@material-ui/icons/AddShoppingCartOutlined";

import Box from "@material-ui/core/Box";
import styles from "assets/jss/material-kit-react/components/foodmenuStyle";
import { primaryColor } from "assets/jss/material-kit-react";
import { purple } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";

import FoodCard from "components/Card/FoodCard";
import {
  Grid,
  Dialog,
  Toolbar,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Slide,
  Hidden
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div style={{ overflow: "hidden" }}>
      <Grid container>
        <Grid
          container
          item
          spacing={3}
          lg={12}
          style={{ marginTop: 30, marginBottom: 30 }}
        >
          <Grid item lg={4}>
            <FoodCard />
          </Grid>
          <Grid item lg={4}>
            <FoodCard />
          </Grid>
          <Grid item lg={4}>
            <FoodCard />
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={3}
          lg={12}
          style={{ marginTop: 30, marginBottom: 30 }}
        >
          <Grid item lg={4}>
            <FoodCard />
          </Grid>
          <Grid item lg={4}>
            <FoodCard />
          </Grid>
          <Grid item lg={4}>
            <FoodCard />
          </Grid>
        </Grid>
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FoodMenu(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const fab = {
    color: "primary",
    className: classes.fab,
    icon: <Cart />,
    label: "Add To Cart"
  };

  const _handlePlaceOrder = props => {
    props.history.push("/placeorder");
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Cart
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Chicken Biriyani" secondary="1" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Fried Rice" secondary="1" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              _handlePlaceOrder(props);
            }}
          >
            <ListItemText primary="Place Order" />
          </ListItem>
        </List>
      </Dialog>

      <div className={classes.root}>
        <AppBar
          position="static"
          color="default"
          style={{ width: theme.spacing(136) }}
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
            <Tab label="Recommended" {...a11yProps(0)} />
            <Tab label="Mini Biriyani" {...a11yProps(1)} />
            <Tab label="Biriyani Bonaza" {...a11yProps(2)} />
            <Tab label="Chicken Starters" {...a11yProps(2)} />
            <Tab label="Veg Soups" {...a11yProps(2)} />
            <Tab label="Non Veg Soups" {...a11yProps(2)} />
            <Tab label="Chicken Kabab" {...a11yProps(2)} />
            <Tab label="Mutton Kabab" {...a11yProps(2)} />
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
        <Zoom
          key={fab.color}
          in={true}
          title="View Cart"
          timeout={transitionDuration}
          style={{
            transitionDelay: `${transitionDuration.exit}ms`
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
            onClick={handleClickOpen}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      </div>
    </ThemeProvider>
  );
}

export default withRouter(FoodMenu);