const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// load order model
const Order = require("../../models/Order");

// user part
// user can view present orders depending upon order status
// user can view past orders depending upon order status
// user can cancel order

// **user can place order and then there should be a code for checking the nearest available delivery boy and then try to assign if accepted then assign to orders

// restaurant admin part
// restaurant admin can view present orders
// restaurant admin can change order status like preparing order and handover order
// restaurant admin can view cancelled orders

module.exports = router;
