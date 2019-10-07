/*eslint-disable*/
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Person, PersonAdd } from '@material-ui/icons';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js';
import InputBase from '../InputBase/InputBase';
import Float from 'components/FloatingButton/Float';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState('');
  return (
    <List className={classes.list}>
      {
        (window.onscroll = () => {
          setCount(window.pageYOffset);
          setDirection(window.oldScroll > window.scrollY ? 'Up' : 'Down');
          window.oldScroll = window.scrollY;
          if (window.scrollY == 0) setDirection('');
        })
      }
      {count > 400 || props.from !== 'component' ? (
        <ListItem className={classes.listItem} style={{ marginRight: 50 }}>
          <InputBase typeName='restaurant' />
        </ListItem>
      ) : (
        ''
      )}
      {direction === 'Down' ? (
        <Float direction='down' />
      ) : direction === 'Up' ? (
        <Float direction='up' />
      ) : (
        ''
      )}
      {count > 400 || props.from !== 'component' ? (
        <ListItem className={classes.listItem}>
          <InputBase typeName='location' />
        </ListItem>
      ) : (
        <ListItem className={classes.listItem} style={{ marginRight: 120 }}>
          <InputBase typeName='location' />
        </ListItem>
      )}
      <ListItem className={classes.listItem}>
        <Button
          href='https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar'
          color='transparent'
          target='_blank'
          className={classes.navLink}
        >
          <PersonAdd className={classes.icons} /> Sign In
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText='Profile'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Person}
          dropdownList={[
            <Link to='/' className={classes.dropdownLink}>
              USER NAME
            </Link>,
            <a
              href='https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar'
              target='_blank'
              className={classes.dropdownLink}
            >
              LOGOUT
            </a>
          ]}
        />
      </ListItem>
    </List>
  );
}
