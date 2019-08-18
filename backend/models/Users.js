const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobno: {
    type: Number,
    required: true
  },
  address: {
    type: String
  },
  image: {
    type: String
  },
  geoloc: {
    type: {
      lat: {
        type: Number
      },
      lng: {
        type: Number
      }
    }
  }
});

module.exports = Users = mongoose.model("users", UserSchema);
