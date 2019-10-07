import React from 'react';
import { withRouter } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card';

import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(styles);

function SectionBasics(props) {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Our Top Rated Restaurants of Top Cities</h2>
        </div>
        <div id='buttons'>
          <div className={classes.title}>
            <h3>Kolkata</h3>
          </div>
          <Grid container direction='row' lg={12} spacing={2}>
            <Grid item lg={4}>
              <Card />
            </Grid>
            <Grid item lg={4}>
              <Card />
            </Grid>
            <Grid item lg={4}>
              <Card />
            </Grid>
          </Grid>
          <div className={classes.title}>
            <center>
              <Button
                color='primary'
                className={classes.button}
                onClick={() => props.history.push('/cityrestaurants')}
              >
                View More
              </Button>
            </center>
          </div>
        </div>
        <div className={classes.space30} />
        <div id='buttons'>
          <div className={classes.title}>
            <h3>Kolkata</h3>
          </div>
          <Grid container direction='row' lg={12} spacing={2}>
            <Grid item lg={4}>
              <Card />
            </Grid>
            <Grid item lg={4}>
              <Card />
            </Grid>
            <Grid item lg={4}>
              <Card />
            </Grid>
          </Grid>
          <div className={classes.title}>
            <center>
              <Button
                color='primary'
                className={classes.button}
                onClick={() => props.history.push('/cityrestaurants')}
              >
                View More
              </Button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SectionBasics);
