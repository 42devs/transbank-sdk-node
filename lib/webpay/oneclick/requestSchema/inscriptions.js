const Schema = require('schema-object');

exports.start = new Schema({
  username: String,
  email: String,
  response_url: String,
});

exports.delete = new Schema({
  username: String,
  tbk_user: String,
});
