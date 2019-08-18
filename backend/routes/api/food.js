const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// load model
const Foods = require("../../models/Foods");

// user part
// user can view a perticular restaurant foods details by food ids and restaurant ids
// user can view a perticular restaurant foods details by only food ids
// user can search by a perticular food with its tagname and foodname

// restaurant admin part
// restaurant admin can add food by its id and update food category by its id
// restaurant admin can delete food on the food array of ids and if its blank after delete then also remove the food details

module.exports = router;
