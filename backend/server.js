const express = require("express");
const fileupload = require("express-fileupload");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const connectDB = require("./config/db");
const cors = require("cors");
const connectCloudinary = require("./config/cloudinary");

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

express.static(path.join(__dirname, "../frontenduser/build"));

// load env vars
dotenv.config({ path: "./config/config.env" });

// connect to Database
connectDB();

// create app
const app = express();

//passport middleware
app.use(passport.initialize());

//passport Config
require("./config/passport.js")(passport);

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use file upload
app.use(fileupload({ useTempFiles: true }));
app.use(cors());

// cloudinary configuration
connectCloudinary();

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

// express.static(path.join(__dirname, "../frontenduser/build"));
//   console.log(process.env.NODE_ENV);
//   app.get("/", (req, res) => {
//     res.json({msg: 'hello'});
//     res.sendFile(path.resolve(__dirname, "../frontenduser", "build", "index.html"));
//   });

// production level code
const env = process.env.NODE_ENV;
if (env.localeCompare("production") == 1) {
  app.get("/", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../frontenduser", "build", "index.html")
    );
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
