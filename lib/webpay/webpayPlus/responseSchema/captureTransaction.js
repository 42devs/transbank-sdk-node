const SimplSchema = require('simpl-schema');

module.exports = new SimplSchema({
  token: String,
  authorization_code: String,
  authorization_date: Date,
  capture_amount: Number,
  response_code: String,
}).newContext();
