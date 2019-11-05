/*eslint-disable*/
import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Person, PersonAdd } from "@material-ui/icons";

// core components
import CustomDropdown from "components/UserComponents/CustomDropdown/CustomDropdown.js";
import Button from "components/UserComponents/CustomButtons/Button.js";

// redux connection
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "actions/authActions";

import styles from "assets/jss/user-kit/components/headerLinksStyle.js";
import InputBase from "../InputBase/InputBase";
import Float from "components/UserComponents/FloatingButton/Float";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

const useStyles = makeStyles(styles);

function HeaderLinks(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState("");
  return (
    <List className={classes.list}>
      {
        (window.onscroll = () => {
          setCount(window.pageYOffset);
          setDirection(window.oldScroll > window.scrollY ? "Up" : "Down");
          window.oldScroll = window.scrollY;
          if (window.scrollY == 0) setDirection("");
        })
      }
      {count > 300 || props.from !== "component" ? (
        <ListItem className={classes.listItem} style={{ marginRight: 50 }}>
          <InputBase typeName="restaurant" />
        </ListItem>
      ) : (
        ""
      )}
      {direction === "Down" ? (
        <Float direction="down" />
      ) : direction === "Up" ? (
        <Float direction="up" />
      ) : (
        ""
      )}
      {count > 300 || props.from !== "component" ? (
        <ListItem className={classes.listItem}>
          <InputBase typeName="location" />
        </ListItem>
      ) : (
        <ListItem className={classes.listItem} style={{ marginRight: 120 }}>
          <InputBase typeName="location" />
        </ListItem>
      )}
      <ListItem className={classes.listItem}>
        <Button
          href="/login-page"
          color="transparent"
          className={classes.navLink}
        >
          <PersonAdd className={classes.icons} /> Sign In
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Profile"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Person}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              USER NAME
            </Link>,
            <a href="/orders" className={classes.dropdownLink}>
              MY ORDERS
            </a>,
            <a onClick={props.logoutUser} className={classes.dropdownLink}>
              LOGOUT
            </a>
          ]}
        />
      </ListItem>
    </List>
  );
}

HeaderLinks.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { logoutUser }
)(HeaderLinks);
