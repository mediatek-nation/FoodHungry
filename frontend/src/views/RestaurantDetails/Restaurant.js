import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "../Components/Sections/SectionBasics";

import styles from "assets/jss/material-kit-react/views/restaurants";
import InputBase from "../../components/InputBase/InputBase";
import { Grid, Typography } from "@material-ui/core";
import FoodMenu from "./sections/FoodMenu";
import SectionNavbars from "views/Components/Sections/SectionNavbars";

const useStyles = makeStyles(styles);

export default function Restaurant(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="FoodHungry"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax>
        <div>
          <Grid container lg={12} style={{ backgroundColor: "white" }}>
            <Grid item lg={6}>
              <div style={{ width: 600, height: 600 }}>
                <img
                  src={require("assets/img/bg3.jpg")}
                  style={{ width: 600, height: 600 }}
                />
              </div>
            </Grid>
            <Grid item lg={6}>
              <div
                style={{
                  width: 600,
                  height: 600,
                  paddingLeft: 100,
                  paddingTop: 100,
                  backgroundColor: "#EE5533"
                }}
              >
                <Grid container lg={12}>
                  <Grid item lg={12}>
                    <h1 className={classes.title}>Imperio Restaurant</h1>
                  </Grid>
                  <Grid item lg={12}>
                    <Typography variant="h4">
                      New Udupi Upahar - Whitefield
                    </Typography>
                  </Grid>
                  <Grid item lg={12} style={{ marginTop: 10 }}>
                    <Typography variant="subtitle1">
                      1. South Indian, 2. Breakfast, 3. Lunch
                    </Typography>
                  </Grid>
                  <Grid container item lg={12}>
                    <Grid item lg={6}>
                      <Typography>Rating</Typography>
                    </Grid>
                    <Grid item lg={6}>
                      <Typography>Delivery Time</Typography>
                    </Grid>
                  </Grid>
                  <Grid container item lg={12}>
                    <Grid item lg={6}>
                      <Typography>4.3</Typography>
                    </Grid>
                    <Grid item lg={6}>
                      <Typography>30 min</Typography>
                    </Grid>
                  </Grid>
                  <Grid item lg={12} style={{ marginTop: 10 }}>
                    <Typography variant="subtitle1">
                      8, Varthur Rd, Varthur Kodi, Palm Meadows,
                      Ramagondanahalli, Whitefield, Bengaluru, Karnataka 560066,
                      India, • More info
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SectionBasics /> */}
        <SectionNavbars />
        {/* <SectionTabs /> */}
        {/* <SectionPills /> */}
        {/* <SectionNotifications /> */}
        {/* <SectionTypography /> */}
        {/* <SectionJavascript /> */}
        {/* <SectionCarousel /> */}
        {/* <SectionCompletedExamples /> */}
        {/* <SectionLogin /> */}
        {/* <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem> */}
        {/* <SectionExamples /> */}
        {/* <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
