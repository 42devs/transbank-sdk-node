const SimplSchema = require('simpl-schema');

module.exports = new SimplSchema({
  url: String,
  token: String,
}).newContext();
