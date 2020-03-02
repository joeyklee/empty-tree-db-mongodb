const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treeSchema = new Schema({
  "latitude": Number,
  "longitude": Number,
  "empty": Boolean
});

const db = mongoose.model('trees', treeSchema)

module.exports = db;