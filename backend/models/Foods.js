const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  categoryname: {
    type: String,
    required: true
  },
  categoryid: {
    type: String,
    required: true
  },
  resids: {
    type: [
      {
        resid: {
          type: String,
          required: true
        }
      }
    ]
  },
  tagname: {
    type: []
  }
});

module.exports = Food = mongoose.model("food", FoodSchema);
