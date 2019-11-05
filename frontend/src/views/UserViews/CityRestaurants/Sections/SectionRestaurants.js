import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/UserComponents/Card/Card";

import styles from "assets/jss/user-kit/views/componentsSections/basicsStyle.js";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionRestaurants() {
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <br />
        <br />
        <div className={classes.title}>
          <h2>Top Rated Restaurants for Your City</h2>
        </div>
        <div id="buttons">
          <Grid container direction="row" lg={12} spacing={4}>
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
        </div>
        <div className={classes.space30} />
        <div id="buttons">
          <br />
          <br />
          <Grid container direction="row" lg={12} spacing={4}>
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
        </div>
      </div>
    </div>
  );
}
