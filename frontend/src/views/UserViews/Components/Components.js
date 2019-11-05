import React, {useEffect} from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/UserComponents/Header/Header.js";
import Footer from "components/UserComponents/Footer/Footer.js";
import GridContainer from "components/UserComponents/Grid/GridContainer.js";
import GridItem from "components/UserComponents/Grid/GridItem.js";
import Parallax from "components/UserComponents/Parallax/Parallax.js";
import InputBase from "components/UserComponents/InputBase/InputBase";
import HeaderLinks from "components/UserComponents/Header/HeaderLinks.js";

// sections
import SectionBasics from "./Sections/SectionBasics.js";

// styles
import styles from "assets/jss/user-kit/views/components.js";

// react-redux connection
import {connect} from 'react-redux';

const useStyles = makeStyles(styles);

function Components(props) {

  useEffect(() => {
    if(props.auth.isAuthenticate) {
      if(props.auth.user.actor === "restadmin") {
        props.history.push("/restadmin")
      } else if(props.auth.user.actor === "courier") {
        props.history.push("/courier")
      }
    }
  });

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

Components.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Components);