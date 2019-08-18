const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// load models
const Users = require("../../models/Users");
const RestaurantAdmin = require("../../models/RestaurantAdmin");
const DeliveryPerson = require("../../models/DeliveryPerson");
const SystemAdmin = require("../../models/SystemAdmin");

module.exports = router;
