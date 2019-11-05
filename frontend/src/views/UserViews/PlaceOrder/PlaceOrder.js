import React from 'react';
import classNames from 'classnames';

// material-ui componenets
import {
  Grid,
  Button,
  createMuiTheme,
  MuiThemeProvider,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// core components
import Header from 'components/UserComponents/Header/Header';
import HeaderLinks from 'components/UserComponents/Header/HeaderLinks';
import Footer from 'components/UserComponents/Footer/Footer';

// styles
import styles from 'assets/jss/user-kit/views/components.js';
import { primaryColor } from 'assets/jss/user-kit';


const useStyles = makeStyles(styles);

const theme = createMuiTheme({
  palette: {
    primary: { main: primaryColor }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
  }
});

function PlaceOrder(props) {

  const { ...rest } = props;
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header
          brand='FoodHungry'
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
                  <Typography variant='h5' color='primary'>
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
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  onClick={() => (window.location.href = '/orderdet')}
                >
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
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  onClick={() => (window.location.href = '/orderdet')}
                >
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

export default PlaceOrder;