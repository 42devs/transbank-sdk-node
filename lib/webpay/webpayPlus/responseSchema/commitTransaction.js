const SimplSchema = require('simpl-schema');

module.exports = new SimplSchema({
  vci: String,
  amount: Number,
  status: Number,
  buy_order: String,
  session_id: String,
  card_detail: String,
  accounting_date: String,
  transaction_date: String,
  authorization_code: String,
  payment_type_code: String,
  response_code: Number,
  installments_amount: Number,
  installments_number: Number,
  balance: Number,
}).newContext();
