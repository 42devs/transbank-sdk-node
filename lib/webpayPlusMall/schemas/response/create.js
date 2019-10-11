module.exports = {
  token: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^[a-z0-9]+$/gi,
  },
  url: {
    type: String,
    required: true,
    length: {
      min: 1,
      max: 255,
    },
    test: /^(ftp|http|https):\/\/[^ "]+$/gi,
  },
};
