const SimplSchema = require('simpl-schema');

module.exports = new SimplSchema({
  buy_order: String,
  session_id: String,
  card_detail: {
    card_number: String,
  },
  expiration_date: String,
  accounting_date: Number,
  transaction_date: Date,
  details: Object,
}).newContext();
