const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  items: {
    type: [
      {
        name: {
          type: String,
          required: true
        },
        qty: {
          type: Number,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }
    ],
    required: true
  },
  totalprice: {
    type: Number,
    required: true
  },
  userdetails: {
    type: {
      email: {
        type: String,
        required: true
      },
      mobno: {
        type: String,
        required: true
      },
      daddress: {
        type: String,
        required: true
      }
    },
    required: true
  },
  resadmin: {
    type: {
      rid: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      geolocation: {
        type: {
          lat: {
            type: Number,
            required: true
          },
          lng: {
            type: Number,
            required: true
          }
        },
        required: true
      }
    },
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  cancel: {
    type: Boolean
  },
  deliveryperson: {
    type: {
      mobno: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      currloc: {
        type: {
          lat: {
            type: Number,
            required: true
          },
          lng: {
            type: Number,
            required: true
          }
        },
        required: true
      }
    }
  },
  paymentMethod: {
    type: String,
    required: true
  },
  orderdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Order = mongoose.model("order", OrderSchema);
