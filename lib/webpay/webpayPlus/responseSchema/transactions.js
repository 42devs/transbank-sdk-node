const Schema = require('schema-object');

exports.Create = new Schema({
  url: String,
  token: String,
});

exports.Commit = new Schema({
  vci: String,
  amount: Number,
  status: Number,
  buy_order: String,
  session_id: String,
  card_detail: {
    type: Object,
    objectType: {
      card_number: Number,
    },
  },
  accounting_date: String,
  transaction_date: String,
  authorization_code: String,
  payment_type_code: String,
  response_code: Number,
  installments_amount: Number,
  installments_number: Number,
  balance: Number,
});

exports.Capture = new Schema({
  token: String,
  authorization_code: String,
  authorization_date: Date,
  capture_amount: Number,
  response_code: String,
});

exports.Refund = new Schema({
  type: String,
  authorization_code: String,
  authorization_date: Date,
  nullified_amount: Number,
  balance: Number,
  response_code: String,
});

exports.Status = new Schema({
  vci: String,
  amount: Number,
  status: String,
  buy_order: String,
  session_id: String,
  accounting_date: String,
  transaction_date: Date,
  authorization_code: String,
  payment_type_code: String,
  response_code: String,
  installments_amount: String,
  installments_number: Number,
  balance: Number,
});
