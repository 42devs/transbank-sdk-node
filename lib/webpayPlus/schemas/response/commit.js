module.exports = {
  vci: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[a-z0-9]+$/gi,
  },
  amount: {
    type: Number,
    required: true,
    length: {
      min: 1,
      max: 3000000,
    },
    test: /^[0-9]*$/gi,
  },
  status: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[a-z0-9]+$/gi,
  },
  buy_order: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[a-z0-9]+$/gi,
  },
  session_id: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[a-z0-9]+$/gi,
  },
  card_detail: {
    type: Object,
    required: true,
    card_number: {
      type: String,
      required: true,
      length: {
        min: 1,
        max: 255,
      },
      test: /^[a-z0-9]+$/gi,
    },
  },
  accounting_date: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[a-z0-9]+$/gi,
  },
  transaction_date: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[a-z0-9]+$/gi,
  },
  authorization_date: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[a-z0-9]+$/gi,
  },
  payment_type_code: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[a-z0-9]+$/gi,
  },
  response_code: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[a-z0-9]+$/gi,
  },
  installments_amount: {
    type: Number,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[0-9]*$/gi,
  },
  installments_number: {
    type: Number,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[0-9]*$/gi,
  },
  balance: {
    type: Number,
    required: true,
    length: {
      min: 1,
      max: 3000000,
    },
    test: /^[0-9]*$/gi,
  },
};
