const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// load model
const DeliveryPerson = require("../../models/DeliveryPerson");

// delivery person own task (Private)
// delivery person can edit their profiles

// user part
// user can rate the delivery person profiles

module.exports = router;
