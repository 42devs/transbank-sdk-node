const SimplSchema = require('simpl-schema');

module.exports = new SimplSchema({
  vci: String,
  details: {
    amount: Number,
    status: String,
    authorization_code: String,
    payment_type_code: String,
    response_code: Number,
    installments_number: Number,
    commerce_code: String,
    buy_order: String,
  },
  buy_order: String,
  session_id: String,
  card_detail: {
    card_number: Number,
  },
  accounting_date: Number,
  transaction_date: Date,
}).newContext();
