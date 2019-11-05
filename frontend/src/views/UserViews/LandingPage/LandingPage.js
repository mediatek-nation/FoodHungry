import React from "react";
import classNames from "classnames";

// material ui components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/UserComponents/Header/Header.js";
import Footer from "components/UserComponents/Footer/Footer.js";
import HeaderLinks from "components/UserComponents/Header/HeaderLinks.js";
import Parallax from "components/UserComponents/Parallax/Parallax.js";

// styles
import styles from "assets/jss/user-kit/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";

// views for this page
import SectionCarousel from "views/UserViews/Components/Sections/SectionCarousel.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="FoodHungry"
        rightLinks={<HeaderLinks from="landing" />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <Parallax className={classes.parallaxMobile}>
        <div className={classes.container}>
          <SectionCarousel />
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection />
          <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
