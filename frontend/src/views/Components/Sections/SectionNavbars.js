import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Search from "@material-ui/icons/Search";
// import Email from "@material-ui/icons/Email";
// import Face from "@material-ui/icons/Face";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// import Header from "components/Header/Header.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// import Button from "components/CustomButtons/Button.js";

// import image from "assets/img/bg.jpg";
// import profileImage from "assets/img/faces/avatar.jpg";

import styles from 'assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js';
import FoodMenu from 'views/RestaurantDetails/sections/FoodMenu';

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.title}>
              <h3>Food Menu</h3>
            </div>
            <FoodMenu />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
