import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const foodcartstyle = {
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  }
};
export default foodcartstyle;
