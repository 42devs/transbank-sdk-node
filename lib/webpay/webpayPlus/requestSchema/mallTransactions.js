const Schema = require('simpl-schema');

exports.create = new Schema({
  buy_order: String,
  session_id: String,
  details: [{
    commerce_code: String,
    amount: Number,
    buy_order: String,
  }],
  return_url: String,
}).newContext();

exports.refund = new Schema({
  buy_order: String,
  commerce_code: String,
}).newContext();

exports.capture = new Schema({
  commerce_code: String,
  buy_order: String,
  authorization_code: String,
  capture_amount: Number,
}).newContext();
