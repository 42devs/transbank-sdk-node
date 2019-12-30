const Schema = require('schema-object');

exports.Create = new Schema({
  buy_order: String,
  session_id: String,
  amount: Number,
  return_url: String,
}, {
  strict: true,
});

exports.Refund = new Schema({
  amount: Number,
}, {
  strict: true,
});

exports.Capture = new Schema({
  buy_order: String,
  authorization_code: String,
  capture_amount: Number,
}, {
  strict: true,
});
