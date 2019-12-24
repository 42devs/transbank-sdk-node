const Schema = require('schema-object');

exports.Create = new Schema({
  buy_order: String,
  session_id: String,
  details: [{
    commerce_code: String,
    amount: Number,
    buy_order: String,
  }],
  return_url: String,
});

exports.Refund = new Schema({
  buy_order: String,
  commerce_code: String,
});

exports.Capture = new Schema({
  commerce_code: String,
  buy_order: String,
  authorization_code: String,
  capture_amount: Number,
});
