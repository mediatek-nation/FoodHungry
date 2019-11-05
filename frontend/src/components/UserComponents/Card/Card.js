import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Paper } from '@material-ui/core';
import styles from 'assets/jss/user-kit/components/cardStyle';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(styles);

const _hankdleClickRest = props => {
  window.location.href = '/restaurant';
};

function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => _hankdleClickRest(props)}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              I
            </Avatar>
          }
          title='Imperio Restaurant'
          subheader='Whitefield, Kundallahali, Bangaluru'
        />
        <CardMedia
          className={classes.media}
          image='https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612'
          title='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            South Indian - Breakfast - Lunch - Dosa
          </Typography>
        </CardContent>
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
  );
}

export default withRouter(RecipeReviewCard);
