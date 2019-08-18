const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// load model
const FoodCategories = require("../../models/FoodCategories");

// user part
// user can view different food categories depending upon restaurant food categories ids

// restaurant admin part
// restaurant admin can add food category by its id and update restaurant admin category id arrays by its id
// restaurant admin can delete food category so that restaurant ids are deleted from the restaurant ids array of food model and then food category and delete food on item also

module.exports = router;
