import { primaryColor } from "assets/jss/user-kit.js";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

const inputbaseStyle = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "auto"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10,
    color: primaryColor
  },
  divider: {
    height: 28,
    margin: 4
  }
};

export default inputbaseStyle;
