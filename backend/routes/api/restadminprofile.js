const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// load model
const RestaurantAdmin = require("../../models/RestaurantAdmin");

// tasks

// restaurant admin own tasks (Private)
// restaurant admin can edit their profiles
// restaurant admin can delete their profiles
// restaurant admin can initiate refund request

// restaurant admin can show their profiles to users (Public)
// user can view all restaurant admin profiles list
// user can view a perticular restaurant profile by its id
// user can rate the restaurant admins (Private)
// user can view the restaurant location on the map

module.exports = router;
