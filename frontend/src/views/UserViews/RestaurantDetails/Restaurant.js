import React from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

// core components
import Header from "components/UserComponents/Header/Header.js";
import Footer from "components/UserComponents/Footer/Footer.js";
import Parallax from "components/UserComponents/Parallax/Parallax.js";
import HeaderLinks from "components/UserComponents/Header/HeaderLinks.js";

// views components
import SectionNavbars from "views/UserViews/Components/Sections/SectionNavbars";

// styles
import styles from "assets/jss/user-kit/views/restaurants";

const useStyles = makeStyles(styles);

// const theme = createMuiTheme();

function Restaurant(props) {

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
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax>
        <div>
          <Grid container lg={12} md={12} style={{ backgroundColor: "white" }}>
            <Grid item lg={6} md={6}>
              <div
                style={{
                  height: 700
                }}
              >
                <img
                  src={require("assets/img/bg3.jpg")}
                  style={{
                    height: 700
                  }}
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6}>
              <div
                style={{
                  height: 700,
                  paddingLeft: 100,
                  paddingTop: 150,
                  backgroundColor: "#EE5533"
                }}
              >
                <Grid container lg={12} md={12}>
                  <Grid item lg={12} md={12}>
                    <h1 className={classes.title}>Imperio Restaurant</h1>
                  </Grid>
                  <Grid item lg={12} md={12}>
                    <Typography variant="h4">
                      New Udupi Upahar - Whitefield
                    </Typography>
                  </Grid>
                  <Grid item lg={12} md={12} style={{ marginTop: 10 }}>
                    <Typography variant="subtitle1">
                      1. South Indian, 2. Breakfast, 3. Lunch
                    </Typography>
                  </Grid>
                  <Grid container item lg={12} md={12}>
                    <Grid item lg={6} md={6}>
                      <Typography>Rating</Typography>
                    </Grid>
                    <Grid item lg={6} md={6}>
                      <Typography>Delivery Time</Typography>
                    </Grid>
                  </Grid>
                  <Grid container item lg={12} md={12}>
                    <Grid item lg={6} md={6}>
                      <Typography>4.3</Typography>
                    </Grid>
                    <Grid item lg={6} md={6}>
                      <Typography>30 min</Typography>
                    </Grid>
                  </Grid>
                  <Grid item lg={12} md={6} style={{ marginTop: 10 }}>
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

export default Restaurant;