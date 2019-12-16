const Schema = require('simpl-schema');

exports.start = new Schema({
  token: String,
  url_webpay: String,
}).newContext();

exports.finish = new Schema({
  response_code: Number,
  tbk_user: String,
  authorization_code: String,
  credit_card_type: String,
  last_four_card_digits: String,
}).newContext();
