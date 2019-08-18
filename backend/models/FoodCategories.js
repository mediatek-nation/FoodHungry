const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodCategoriesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  foodids: {
    type: [
      {
        foodid: {
          type: String
        }
      }
    ]
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
  }
});

module.exports = FoodCategories = mongoose.model(
  "foodcategories",
  FoodCategoriesSchema
);
