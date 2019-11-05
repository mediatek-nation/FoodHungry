const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantAdminSchema = new Schema({
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
  address: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  geolocation: {
    type: {
      lat: {
        type: Number
      },
      lng: {
        type: Number
      }
    }
  },
  item: {
    type: [
      {
        fid: {
          type: String,
          required: true
        },
        cid: {
          type: String,
          required: true
        },
        price: {
          type: Number
        },
        rating: {
          type: Number
        },
        available: {
          type: Boolean,
          required: true
        }
      }
    ]
  },
  categoryids: {
    type: [
      {
        categoryid: {
          type: String
        }
      }
    ]
  },
  rating: {
    type: String
  },
  usercount: {
    type: Number
  },
  mobno: {
    type: Number,
    required: true
  }
});

module.exports = RestaurantAdmin = mongoose.model(
  "restaurantadmin",
  RestaurantAdminSchema
);
