import { container } from 'assets/jss/user-kit.js';
import { green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const foodmenuStyle = {
  root: {
    container,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    minHeight: 200
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(20),
    [theme.breakpoints.up('lg')]: {
      right: theme.spacing(15)
    },
    [theme.breakpoints.down('md')]: {
      right: theme.spacing(14)
    }
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600]
    }
  },
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
};
export default foodmenuStyle;
