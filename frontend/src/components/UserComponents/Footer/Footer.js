/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/user-kit/components/footerStyle.js";
import { primaryColor } from "assets/jss/user-kit";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <Grid
          container
          spacing={1}
          justify="center"
          style={{ marginTop: "auto" }}
        >
          <Grid item>
            <div
              className={classes.section}
              style={{
                fontSize: 20,
                fontWeight: "400",
                lineHeight: 10
              }}
            >
              Food<span style={{ color: primaryColor }}>Hungry</span>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.section}>
              <ListItem>About FoodHungry</ListItem>
              <ListItem>Read Our Blog</ListItem>
              <ListItem>Buy Gift Cards</ListItem>
              <ListItem>Sign Up to Deliver</ListItem>
              <ListItem>Add your Restaurant</ListItem>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.section}>Created By Mediatek Nation</div>
          </Grid>
        </Grid>
        <hr />
        <Grid
          container
          spacing={12}
          justify="center"
          style={{ marginBottom: 30 }}
        >
          <Grid item>
            <div className={classes.section1}>
              <Typography>
                <i class="fa fa-copyright" aria-hidden="true"></i>{" "}
                {new Date().getFullYear()} FoodHungry Technologies
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.section1}>
              <ListItem className={classes.inlineBlock}>
                <i class="fab fa-facebook" style={{ fontSize: 25 }}></i>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <i class="fab fa-twitter" style={{ fontSize: 25 }}></i>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <i class="fab fa-instagram" style={{ fontSize: 25 }}></i>
              </ListItem>
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
