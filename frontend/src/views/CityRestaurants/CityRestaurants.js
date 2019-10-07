import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
// sections for this page

import styles from 'assets/jss/material-kit-react/views/components.js';
import SectionRestaurants from './Sections/SectionRestaurants.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand='FoodHungry'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: 'white'
        }}
        {...rest}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionRestaurants />
      </div>
      <Footer />
    </div>
  );
}
