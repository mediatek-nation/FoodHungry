const express = require("express");
const router = express.Router();
const passport = require("passport");
const cloudinary = require("cloudinary").v2;

// load model
const Users = require("../../models/Users");
const RestaurantAdmin = require("../../models/RestaurantAdmin");

// user own tasks (Private)
// users can edit profile
// users can delete profile

// restaurant admin own tasks (Private)

// restaurant admin edit profile
router.post(
  "/restadmin/update-profile",
  passport.authenticate("restadmin", { session: false }),
  async (req, res) => {
    try {
      const adminProfile = {
        email: req.body.email,
        name: req.body.name,
        mobno: req.body.mobno,
        address: req.body.address
      };
      let resData = await RestaurantAdmin.findOneAndUpdate(
        { _id: req.user.id },
        adminProfile,
        {
          $new: true
        }
      );
      res.json(resData);
    } catch (error) {
      console.error(error);
    }
  }
);

// restaurant admin profile picture update
router.post(
  "/restadmin/update-profile-picture",
  passport.authenticate("restadmin", { session: false }),
  async (req, res, next) => {
    try {
      const file = req.files.image;
      // upload file to cloudinary
      await cloudinary.uploader.upload(
        file.tempFilePath,
        async (err, result) => {
          if (err) throw err;
          // update restaurant admin profile
          const adminProfile = {
            image: result.url
          };
          let resData = await RestaurantAdmin.findOneAndUpdate(
            { _id: req.user.id },
            adminProfile,
            {
              $new: true
            }
          );
          res.json(resData);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
);

// restaurant admin can delete profile

module.exports = router;
