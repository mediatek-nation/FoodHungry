const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  orderid: {
    type: String,
    required: true
  },
  paymentid: {
    type: String,
    required: true
  },
  paymentreqid: {
    type: String,
    required: true
  },
  useremail: {
    type: String,
    required: true
  },
  paymentdate: {
    type: Date,
    default: Date.now
  },
  paymentamt: {
    type: Number,
    required: true
  }
});

module.exports = Payment = mongoose.model("payment", PaymentSchema);
