import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MyLocation from "@material-ui/icons/MyLocation";

import styles from "assets/jss/user-kit/components/inputbaseStyle";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(styles);

const _handleSearchLocation = props => {
  props.history.push("/location");
};

const _handleSearchRestaurants = () => {
  alert("We will show you restaurants very soon");
};

function CustomizedInputBase(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={
          props.typeName === "location" ? "Search Google Maps" : "Search Foods"
        }
        inputProps={{
          "aria-label":
            props.typeName === "location"
              ? "Search Google Maps"
              : "Search Foods"
        }}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        tooltip="Search"
        onClick={() =>
          props.typeName === "location"
            ? _handleSearchLocation(props)
            : _handleSearchRestaurants(props)
        }
      >
        <SearchIcon />
      </IconButton>

      <Divider className={classes.divider} orientation="vertical" />

      {props.typeName === "location" ? (
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
          tooltip="Find Me"
        >
          <MyLocation />
        </IconButton>
      ) : (
        ""
      )}
    </Paper>
  );
}

export default withRouter(CustomizedInputBase);
