const express = require("express");
const router = express.Router();
const passport = require("passport");

// load order model
const Order = require("../../models/Order");

// test
router.get("/test", (req, res) => {
    res.json({
        msg: "Successfull"
    });
});

// user part
// user can place order
router.get(
    "/user/placeorder",
    passport.authenticate("user", {session: false}),
    (req, res) => {
    res.json({
        msg: "Order Placed"
    });
})
// user can view present orders depending upon order status
// user can view past orders depending upon order status
// user can cancel order

// **user can place order and then there should be a code for checking the nearest available delivery boy and then try to assign if accepted then assign to orders

// restaurant admin part
// restaurant admin can view present orders
// restaurant admin can change order status like preparing order and handover order
// restaurant admin can view cancelled orders

module.exports = router;
