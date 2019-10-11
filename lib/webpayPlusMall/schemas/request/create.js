module.exports = {
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
  return_url: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^(ftp|http|https):\/\/[^ "]+$/gi,
  },
  details: {
    type: Array,
    required: true,
    details: [
      {
        amount: {
          type: Number,
          required: true,
          length: {
            min: 1,
            max: 3000000,
          },
          test: /^[0-9]*$/gi,
        },
        commerce_code: {
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
      },
    ],
  },
};
