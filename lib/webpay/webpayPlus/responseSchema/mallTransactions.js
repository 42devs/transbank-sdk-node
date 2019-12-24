const Schema = require('schema-object');

exports.Create = new Schema({
  url: String,
  token: String,
});

exports.Commit = new Schema({
  vci: String,
  details: [{
    amount: Number,
    status: String,
    authorization_code: String,
    payment_type_code: String,
    response_code: Number,
    installments_number: Number,
    commerce_code: String,
    buy_order: String,
  }],
  buy_order: String,
  session_id: String,
  card_detail: {
    type: Object,
    objectType: {
      card_number: Number,
    },
  },
  accounting_date: Number,
  transaction_date: Date,
});

exports.Refund = new Schema({
  type: String,
  authorization_code: String,
  authorization_date: Date,
  nullified_amount: Number,
  balance: Number,
  response_code: String,
});

exports.Capture = new Schema({
  token: String,
  authorization_code: String,
  authorization_date: Date,
  capture_amount: Number,
  response_code: String,
});

exports.Status = new Schema({
  buy_order: String,
  session_id: String,
  card_detail: {
    type: Object,
    objectType: {
      card_number: Number,
    },
  },
  expiration_date: String,
  accounting_date: Number,
  transaction_date: Date,
  details: Object,
});
