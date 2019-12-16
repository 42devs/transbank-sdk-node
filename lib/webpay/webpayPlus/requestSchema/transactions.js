const Schema = require('simpl-schema');

exports.create = new Schema({
  buy_order: String,
  session_id: String,
  amount: Number,
  return_url: String,
}).newContext();

exports.refund = new Schema({
  amount: Number,
}).newContext();

exports.capture = new Schema({
  buy_order: String,
  authorization_code: String,
  capture_amount: Number,
}).newContext();
