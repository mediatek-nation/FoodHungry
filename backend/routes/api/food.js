const express = require("express");
const router = express.Router();
const passport = require("passport");

// load model
const Foods = require("../../models/Foods");

// user part
// user can view a perticular restaurant foods details by food ids and restaurant ids
// user can view a perticular restaurant foods details by only food ids
// user can search by a perticular food with its tagname and foodname

// restaurant admin part
// restaurant admin can add a food
router.post(
    "/restadmin/addfood",
    passport.authenticate('restadmin', {session: false}),
    (req, res) => {
    res.json({
        msg: "Food added Successfully"
    });
});

// restaurant admin can add a food category
// restaurant admin can delete food on the food array of ids and if its blank after delete then also remove the food details

module.exports = router;
