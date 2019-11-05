import React from 'react';
import classNames from 'classnames';

// material-ui components
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

function OrderDetails(props) {

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
                    <u>Courier Information</u>
                  </Typography>
                </center>
                <br />
              </Grid>
              <Grid item lg={4} md={4}></Grid>
            </Grid>
            <Grid container item lg={12} md={12}>
              <Grid item lg={4} md={4}></Grid>
              <Grid item lg={4} md={4}>
                <Typography variant='subtitle2'>Name: Amit Hazra</Typography>
                <Typography variant='subtitle2'>
                  Mobile No: +91 9093079136
                </Typography>
                <br />
              </Grid>
              <Grid item lg={4} md={4}></Grid>
            </Grid>
            <Grid container item lg={12} md={12}>
              <Grid item lg={4} md={4}></Grid>
              <Grid item lg={4} md={4}>
                <center>
                  <Typography variant='h5' color='primary'>
                    <u>Receipt</u>
                  </Typography>
                </center>
                <br />
              </Grid>
              <Grid item lg={4} md={4}></Grid>
            </Grid>
            <Grid container item lg={12} md={12}>
              <Grid item lg={4} md={4}></Grid>
              <Grid item lg={4} md={4}>
                <center>
                  <Button variant='contained' color='primary'>
                    <Typography>Cancel Order</Typography>
                  </Button>
                </center>
                <br />
              </Grid>
              <Grid item lg={4} md={4}></Grid>
            </Grid>
            <Grid container item lg={12} md={12}>
              <Grid item lg={4} md={4}></Grid>
              <Grid item lg={4} md={4}>
                <center>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => (window.location.href = '/google-map')}
                  >
                    <Typography>View Location</Typography>
                  </Button>
                </center>
                <br />
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

export default OrderDetails;