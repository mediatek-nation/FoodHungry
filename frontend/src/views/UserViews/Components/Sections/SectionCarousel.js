import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from 'components/UserComponents/Grid/GridContainer.js';
import GridItem from 'components/UserComponents/Grid/GridItem.js';
// import Card from "components/Card/Card.js";

// import InputBase from "components/InputBase/InputBase";

import image1 from 'assets/img/bg.jpg';
import image2 from 'assets/img/bg2.jpg';
import image3 from 'assets/img/bg3.jpg';

import styles from 'assets/jss/user-kit/views/componentsSections/carouselStyle.js';
import CarouselCard from 'components/UserComponents/Card/CarouselCard';

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <CarouselCard carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src={image1}
                    alt='First slide'
                    className='slick-image'
                    style={{ height: 600 }}
                  />
                </div>
                <div>
                  <img
                    src={image2}
                    alt='Second slide'
                    className='slick-image'
                    style={{ height: 600 }}
                  />
                </div>
                <div>
                  <img
                    src={image3}
                    alt='Third slide'
                    className='slick-image'
                    style={{ height: 600 }}
                  />
                </div>
              </Carousel>
            </CarouselCard>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
