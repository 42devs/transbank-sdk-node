const SimplSchema = require('simpl-schema');

module.exports = new SimplSchema({
  type: String,
  authorization_code: String,
  authorization_date: Date,
  nullified_amount: Number,
  balance: Number,
  response_code: String,
}).newContext();
