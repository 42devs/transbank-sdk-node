const Schema = require('simpl-schema');

exports.create = new Schema({
  url: String,
  token: String,
}).newContext();

exports.commit = new Schema({
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
    card_number: Number,
  },
  accounting_date: Number,
  transaction_date: Date,
}).newContext();

exports.refund = new Schema({
  type: String,
  authorization_code: String,
  authorization_date: Date,
  nullified_amount: Number,
  balance: Number,
  response_code: String,
}).newContext();

exports.capture = new Schema({
  token: String,
  authorization_code: String,
  authorization_date: Date,
  capture_amount: Number,
  response_code: String,
}).newContext();

exports.status = new Schema({
  buy_order: String,
  session_id: String,
  card_detail: {
    card_number: String,
  },
  expiration_date: String,
  accounting_date: Number,
  transaction_date: Date,
  details: Object,
}).newContext();
