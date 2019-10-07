import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {
  CardActionArea,
  Paper,
  // Dialog,
  // AppBar,
  // Toolbar,
  // IconButton,
  // Button,
  // List,
  // ListItem,
  // ListItemText,
  // Divider,
  // Slide,
  createMuiTheme
} from '@material-ui/core';
import styles from 'assets/jss/material-kit-react/components/cardStyle';
import { withRouter } from 'react-router-dom';
// import CloseIcon from '@material-ui/icons/Close';
import { ThemeProvider } from '@material-ui/styles';
import { primaryColor } from 'assets/jss/material-kit-react';
import FoodCart from 'components/FoodCart/FoodCart';
import { addFoods } from 'actions/cartActions';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: '#f44336'
    }
  }
});

function handleClickOpen(props) {
  const cartData = {
    open: true,
    foods: [
      {
        food: 'Chicken Biriyani',
        price: 1850,
        quantity: 1
      }
    ]
  };
  props.addFoods(cartData);
}

function FoodCard(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <FoodCart />
      <div>
        <Card className={classes.card}>
          <CardActionArea onClick={() => handleClickOpen(props)}>
            <CardHeader
              title='UE Mini Chicken Biriyani'
              subheader='1 Leg pc. Chicken, 1 Egg, 1 Potato'
            />
            <CardMedia
              className={classes.media}
              image='https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612'
              title='Add To Cart'
            />
          </CardActionArea>
          <CardActions>
            <Paper style={{ boxShadow: 'none', backgroundColor: '#F6F6F6' }}>
              <Typography variant='body2' color='textSecondary' component='p'>
                15-25 min
              </Typography>
            </Paper>
            <Paper style={{ boxShadow: 'none', backgroundColor: '#F6F6F6' }}>
              <Typography variant='body2' color='textSecondary' component='p'>
                4.4 <i class='fas fa-star'></i> (500+ )
              </Typography>
            </Paper>
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
}

FoodCard.propTypes = {
  addFoods: PropTypes.func.isRequired
};

export default connect(
  null,
  { addFoods }
)(withRouter(FoodCard));
