import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import Footer from 'components/Footer/Footer';

export default function PlaceOrder(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header brand='FoodHungry' rightLinks={<HeaderLinks />} fixed {...rest} />
      <div>
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
              <Button variant='contained' color='primary'>
                Cash On Delivery
              </Button>
            </Grid>
            <Grid item lg={4} md={4}></Grid>
          </Grid>
          <Grid container item lg={12} md={12}>
            <br />
            <br />
          </Grid>
          <Grid container item lg={12} md={12}>
            <Grid item lg={4} md={4}></Grid>
            <Grid item lg={4} md={4}>
              <Button variant='contained' color='primary'>
                Online Payment
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
  );
}
