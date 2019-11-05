import React from 'react';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Header from 'components/UserComponents/Header/Header.js';
import Footer from 'components/UserComponents/Footer/Footer.js';
import HeaderLinks from 'components/UserComponents/Header/HeaderLinks.js';

// section component
import SectionRestaurants from './Sections/SectionRestaurants.js';

// styles
import styles from 'assets/jss/user-kit/views/components.js';

const useStyles = makeStyles(styles);

function CityRestaurants(props) {

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

export default CityRestaurants;