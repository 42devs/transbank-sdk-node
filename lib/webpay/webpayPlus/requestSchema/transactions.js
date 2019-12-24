const Schema = require('schema-object');

exports.Create = new Schema({
  buy_order: String,
  session_id: String,
  amount: Number,
  return_url: String,
});

exports.Refund = new Schema({
  amount: Number,
});

exports.Capture = new Schema({
  buy_order: String,
  authorization_code: String,
  capture_amount: Number,
});
