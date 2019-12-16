const Schema = require('simpl-schema');

exports.start = new Schema({
  username: String,
  email: String,
  response_url: String,
}).newContext();

exports.delete = new Schema({
  username: String,
  tbk_user: String,
}).newContext();
