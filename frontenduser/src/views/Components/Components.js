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
import SectionBasics from "./Sections/SectionBasics.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import InputBase from "../../components/InputBase/InputBase";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="FoodHungry"
        rightLinks={<HeaderLinks from="component" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg8.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  <span style={{ color: "#EE5533" }}>FOOD</span> HUNGRY
                </h1>
                <h3 className={classes.subtitle}>
                  TASTE THE BEST DILICIOUS FOODS WITH US
                </h3>
                <br />
                <br />
                <div className={classes.inputbase}>
                  <InputBase typeName="restaurant" />
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        {/* <SectionNavbars /> */}
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
