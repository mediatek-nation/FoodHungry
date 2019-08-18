const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliveryPersonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobno: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bikeno: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  },
  usercount: {
    type: Number
  }
});

module.exports = DeliveryPerson = mongoose.model(
  "deliveryperson",
  DeliveryPersonSchema
);
