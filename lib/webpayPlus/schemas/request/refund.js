module.exports = {
  amount: {
    type: Number,
    required: true,
    length: {
      min: 1,
      max: 3000000,
    },
    test: /^[0-9]*$/gi,
  },
};
