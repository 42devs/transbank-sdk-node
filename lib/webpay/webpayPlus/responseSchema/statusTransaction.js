const SimplSchema = require('simpl-schema');

module.exports = new SimplSchema({
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
}).newContext();
