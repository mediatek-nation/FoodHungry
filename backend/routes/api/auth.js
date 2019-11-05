// require tools
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// load models
const Users = require("../../models/Users");
const RestaurantAdmin = require("../../models/RestaurantAdmin");
const DeliveryPerson = require("../../models/DeliveryPerson");
const SystemAdmin = require("../../models/SystemAdmin");

// load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// authentication tasks

// test
router.get("/test", (req, res) => {
  res.json({ msg: "Success" });
});

// user part

// user can register
router.post("/user/register", (req, res) => {
  // load error data
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Users.findOne({ email: req.body.email })
    .then(user => {
      // check that email id is already exists or not
      if (user) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      } else {
        // construct the new user data
        const userData = new Users({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          mobno: req.body.mobno,
          address: req.body.address
        });
        // encrypt the password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(userData.password, salt, (err, hash) => {
            if (err) throw err;
            userData.password = hash;
            userData
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

// user can login
router.post("/user/login", (req, res) => {
  // load error data
  const { errors, isValid } = validateLoginInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  Users.findOne({ email })
    .then(user => {
      // check for the user accross the email id is found or not
      if (!user) {
        // if not found
        errors.email = "No such email exists as a User!";
        return res.status(404).json(errors);
      } else {
        // if found
        // compare the password
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            // password matched
            // create a payload for jwt token
            const payload = {
              id: user.id,
              name: user.name,
              email: user.email,
              actor: "user"
            };

            // sign on jwt with the payload to create a token
            jwt.sign(
              payload,
              process.env.SECRET_OR_KEY,
              { expiresIn: 43200 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            // password is not matched
            errors.password = "Password is incorrect!";
            return res.status(400).json(errors);
          }
        });
      }
    })
    .catch(err => console.log(err));
});

// return current user
router.get(
  "/user/current",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

// restaurant admin part

// restaurant admin can register
router.post("/restadmin/register", (req, res) => {
  // load error data
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  RestaurantAdmin.findOne({ email: req.body.email })
    .then(admin => {
      // check that email id is already exists or not
      if (admin) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      } else {
        // construct the new user data
        const adminData = new RestaurantAdmin({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          mobno: req.body.mobno,
          address: req.body.address,
          image:
            "https://res.cloudinary.com/amit-hazra/image/upload/v1572939097/FoodHungry/images_hyihaa.jpg"
        });
        // encrypt the password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(adminData.password, salt, (err, hash) => {
            if (err) throw err;
            adminData.password = hash;
            adminData
              .save()
              .then(admin => res.json(admin))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

// restaurant admin can login
router.post("/restadmin/login", (req, res) => {
  // load error data
  const { errors, isValid } = validateLoginInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  RestaurantAdmin.findOne({ email })
    .then(admin => {
      if (!admin) {
        // if no such email exists as a Restaurant Admin
        errors.email = "No such email exists as a Restaurant Admin";
        return res.status(404).json(errors);
      } else {
        // if that email id exists
        // compare for the password
        bcrypt.compare(password, admin.password).then(isMatch => {
          if (isMatch) {
            // if password is matched

            // create payload
            const payload = {
              id: admin.id,
              name: admin.name,
              email: admin.email,
              actor: "restadmin"
            };

            // sign to jwt with the payload
            jwt.sign(
              payload,
              process.env.SECRET_OR_KEY,
              { expiresIn: 43200 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            errors.password = "Password is incorrect";
            return res.status(400).json(errors);
          }
        });
      }
    })
    .catch(err => console.log(err));
});

// return current restaurant admin
router.get(
  "/restadmin/current",
  passport.authenticate("restadmin", { session: false }),
  (req, res) => {
    RestaurantAdmin.findById(req.user.id)
      .then(resData => {
        res.json({
          id: req.user.id,
          name: req.user.name,
          email: resData.email,
          mobno: resData.mobno,
          address: resData.address,
          image: resData.image
        });
      })
      .catch(err => console.log(err));
  }
);

// delivery person part
// delivery person can login

// system admin part
// system admin can register
// system admin can login

module.exports = router;
