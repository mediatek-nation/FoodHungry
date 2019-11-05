import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Icon,
  Divider
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import styles from "assets/jss/user-kit/components/foodCartStyle";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { saveFoods } from "actions/cartActions";

class FoodCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [
        {
          food: "",
          price: "",
          quantity: ""
        }
      ]
    };

    this._handleSave = this._handleSave.bind(this);
    this._handlePlaceOrder = this._handlePlaceOrder.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      foods: props.cart.foods
    });
  }

  _handleIncreseQuantity = i => {
    let temp = this.state.foods;
    temp[i].quantity++;
    this.setState({ foods: temp });
  };

  _handleDecreseQuantity = i => {
    let temp = this.state.foods;
    if (temp[i].quantity > 1) temp[i].quantity--;
    this.setState({ foods: temp });
  };

  _handleDeleteItem = i => {
    let temp = [];
    for (let j = 0; j < this.state.foods.length; j++) {
      if (j !== i) temp.push(this.state.foods[j]);
    }
    this.setState({ foods: temp });
  };

  _handleSave = () => {
    const cartData = {
      open: false,
      foods: this.state.foods
    };
    this.props.saveFoods(cartData);
  };

  _handlePlaceOrder = () => {
    this.props.history.push("/placeorder");
  };

  _Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  render() {
    const { classes } = this.props;

    let total = 0;
    for (let i = 0; i < this.state.foods.length; i++) {
      total = total + this.state.foods[i].price * this.state.foods[i].quantity;
    }

    return (
      <Dialog
        fullScreen
        open={this.props.cart.open}
        onClose={this._handleSave}
        TransitionComponent={this._Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={this._handleSave}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Cart
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container lg={12} md={12}>
          <Grid container item lg={12} md={12}></Grid>
          {this.state.foods.map((item, key) => {
            return (
              <Grid container item lg={12} md={12} justify="center" spacing={2}>
                <Grid item lg={2} md={2}></Grid>
                <Grid item lg={2} md={2}>
                  <br />
                  <Typography variant="h5">{item.food}</Typography>
                </Grid>
                <Grid item lg={2} md={2}>
                  <TextField
                    id="filled-adornment-password"
                    className={`${classes.margin} ${classes.textField}`}
                    variant="filled"
                    type="text"
                    label="Quantity"
                    value={item.quantity}
                    // onChange={handleChange('password')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            aria-label="toggle add quantity"
                            onClick={() => this._handleIncreseQuantity(key)}
                            color="primary"
                          >
                            <Icon>add_circle</Icon>
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="toggle add quantity"
                            onClick={() => this._handleDecreseQuantity(key)}
                            // onMouseDown={handleMouseDownPassword}
                            color="primary"
                          >
                            <Icon>remove_circle</Icon>
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item lg={2} md={2}>
                  <br />
                  <center>
                    <Typography variant="h5">{`Rs. ${item.price}`}</Typography>
                  </center>
                </Grid>
                <Grid item lg={2} md={2}>
                  <br />
                  <IconButton
                    tooltip="Remove Item"
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={() => this._handleDeleteItem(key)}
                    // onMouseDown={handleMouseDownPassword}
                    color="primary"
                  >
                    <Icon>delete_circle</Icon>
                  </IconButton>
                </Grid>
                <Grid item lg={2} md={2}></Grid>
              </Grid>
            );
          })}
          <Grid item lg={12} md={12}>
            <Divider />
          </Grid>
          {this.state.foods.map((item, key) => {
            return (
              <Grid container item lg={12} md={12} justify="center" spacing={2}>
                <Grid item lg={3} md={3}></Grid>
                <Grid item lg={1} md={1}>
                  <br />
                  <Typography variant="h5">{item.price}</Typography>
                </Grid>
                <Grid item lg={1} md={1}>
                  <br />
                  <Typography variant="h5">×</Typography>
                </Grid>
                <Grid item lg={1} md={1}>
                  <br />
                  <Typography variant="h5">{item.quantity}</Typography>
                </Grid>
                <Grid item lg={1} md={1}>
                  <br />
                  <Typography variant="h5">=</Typography>
                </Grid>
                <Grid item lg={1} md={1}>
                  <br />
                  <Typography variant="h5">
                    {item.price * item.quantity}
                  </Typography>
                </Grid>
                <Grid item lg={4} md={4}></Grid>
              </Grid>
            );
          })}
          <Grid container item lg={12} md={12} justify="center" spacing={2}>
            <Grid item lg={2} md={2}></Grid>
            <Grid item lg={8} md={8}>
              <Divider />
            </Grid>
            <Grid item lg={2} md={2}></Grid>
          </Grid>
          <Grid container item lg={12} md={12} justify="center" spacing={2}>
            <Grid item lg={3} md={3}></Grid>
            <Grid item lg={1} md={1}>
              <br />
              <Typography variant="h5">Total</Typography>
            </Grid>
            <Grid item lg={1} md={1}></Grid>
            <Grid item lg={1} md={1}></Grid>
            <Grid item lg={1} md={1}></Grid>
            <Grid item lg={1} md={1}>
              <br />
              <Typography variant="h5">{total}</Typography>
            </Grid>
            <Grid item lg={4} md={4}></Grid>
          </Grid>
          <Grid container item lg={12} md={12} justify="center" spacing={2}>
            <Grid item lg={3} md={3}></Grid>
            <Grid item lg={3} md={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={this._handlePlaceOrder}
              >
                <Typography>Place Order</Typography>
              </Button>
            </Grid>
            <Grid item lg={3} md={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={this._handleSave}
              >
                <Typography>Add More Food</Typography>
              </Button>
            </Grid>
            <Grid item lg={3} md={3}></Grid>
          </Grid>
          <Grid container item lg={12} md={12}></Grid>
        </Grid>
      </Dialog>
    );
  }
}

FoodCart.propTypes = {
  classes: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  saveFoods: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { saveFoods }
)(withStyles(styles)(withRouter(FoodCart)));
