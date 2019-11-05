import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import Cart from '@material-ui/icons/AddShoppingCartOutlined';
import styles from 'assets/jss/user-kit/components/foodmenuStyle';
import { primaryColor } from 'assets/jss/user-kit';
import { ThemeProvider } from '@material-ui/styles';

import FoodCard from 'components/UserComponents/Card/FoodCard';
import { Grid, Badge } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';

import FoodCart from 'components/UserComponents/FoodCart/FoodCart';
import { addFoods } from 'actions/cartActions';

import { connect } from 'react-redux';

function TabPanel(props) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Grid container>
        <Grid
          container
          item
          spacing={4}
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
        <Grid container item spacing={4} lg={12} style={{ marginBottom: 30 }}>
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
    'aria-controls': `action-tabpanel-${index}`
  };
}

const useStyles = makeStyles(styles);

function FoodMenu(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  // const [open, setOpen] = React.useState(false);

  function handleClickOpen(props) {
    const cartData = {
      open: true,
      foods: []
    };
    props.addFoods(cartData);
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
        main: '#f44336'
      }
    }
  });

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const fab = {
    color: 'primary',
    className: classes.fab,
    icon: <Cart />,
    label: 'Add To Cart'
  };

  return (
    <ThemeProvider theme={theme}>
      <FoodCart />
      <div className={classes.root}>
        <AppBar
          position='static'
          color='default'
          style={{ width: 'auto', marginLeft: 60, marginRight: 60 }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='scrollable'
            scrollButtons='auto'
            aria-label='action tabs example'
          >
            <Tab label='Recommended' {...a11yProps(0)} />
            <Tab label='Mini Biriyani' {...a11yProps(1)} />
            <Tab label='Biriyani Bonaza' {...a11yProps(2)} />
            <Tab label='Chicken Starters' {...a11yProps(2)} />
            <Tab label='Veg Soups' {...a11yProps(2)} />
            <Tab label='Non Veg Soups' {...a11yProps(2)} />
            <Tab label='Chicken Kabab' {...a11yProps(2)} />
            <Tab label='Mutton Kabab' {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
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
          title='View Cart'
          timeout={transitionDuration}
          style={{
            transitionDelay: `${transitionDuration.exit}ms`
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab.label}
            className={fab.className}
            onClick={() => handleClickOpen(props)}
          >
            <Badge badgeContent={props.cart.foods.length} color='primary'>
              {fab.icon}
            </Badge>
          </Fab>
        </Zoom>
      </div>
    </ThemeProvider>
  );
}

FoodMenu.propTypes = {
  addFoods: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { addFoods }
)(withRouter(FoodMenu));
