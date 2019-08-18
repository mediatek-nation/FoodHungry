// require tools
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// load models
const Users = require("../../models/Users");
const RestaurantAdmin = require("../../models/RestaurantAdmin");
const DeliveryPerson = require("../../models/DeliveryPerson");
const SystemAdmin = require("../../models/SystemAdmin");

// authentication tasks

// user part
// user can register
// user can login

// restaurant admin part
// restaurant admin can register
// restaurant admin can login

// delivery person part
// delivery person can login

// system admin part
// system admin can register
// system admin can login

module.exports = router;
