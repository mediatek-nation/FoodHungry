const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const passport = require("passport");
const path = require("path");

require("dotenv").config();

// require routes
const auth = require("./routes/api/auth");
const deliverypersonduty = require("./routes/api/deliverypersonduty");
const deliverypersonprofile = require("./routes/api/deliverypersonprofile");
const food = require("./routes/api/food");
const foodcategory = require("./routes/api/foodcategory");
const locationtracking = require("./routes/api/locationtracking");
const order = require("./routes/api/order");
const orderhistory = require("./routes/api/orderhistory");
const payment = require("./routes/api/payment");
const restadminprofile = require("./routes/api/restadminprofile");
const sysadmin = require("./routes/api/sysadmin");
const userprofile = require("./routes/api/userprofile");
const verification = require("./routes/api/verification");

// create app
const app = express();
express.static(path.join(__dirname, "../frontend/build"));

// config DB
const db = require("./config/keys").mongoURI;

// connect to DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//passport middleware
//app.use(passport.initialize());

//passport Config
//require("./config/passport.js")(passport);

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use routes
app.use("/api/auth", auth);
app.use("/api/deliverypersonduty", deliverypersonduty);
app.use("/api/deliverypersonprofile", deliverypersonprofile);
app.use("/api/food", food);
app.use("/api/foodcategory", foodcategory);
app.use("/api/locationtracking", locationtracking);
app.use("/api/order", order);
app.use("/api/orderhistory", orderhistory);
app.use("/api/payment", payment);
app.use("/api/restadminprofile", restadminprofile);
app.use("/api/sysadmin", sysadmin);
app.use("/api/userprofile", userprofile);
app.use("/api/verification", verification);

//this is for production time
//server static assets if in production
// if (process.env.NODE_ENV === "production") {
//   //set static folder
//   app.use(express.static("client/build"));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
});
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
