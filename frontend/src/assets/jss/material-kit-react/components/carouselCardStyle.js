import { primaryColor } from "assets/jss/material-kit-react.js";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

const cardStyle = {
  card: {
    maxWidth: 5000,
    boxShadow: "6px 6px 8px #E0E0E0"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: primaryColor
  }
};

export default cardStyle;
