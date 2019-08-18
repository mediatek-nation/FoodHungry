const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// load models
const DeliveryPerson = require("../../models/DeliveryPerson");
const SystemAdmin = require("../../models/SystemAdmin");

// tasks

// system admin tasks (Private)
// register delivery person
// edit delivery person profile
// delete delivery person profile

// own task (Private)
// system admin can edit their profile

module.exports = router;
