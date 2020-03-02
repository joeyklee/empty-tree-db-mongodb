require('dotenv').config();
module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/empty-tree-db',
  MONGODB_USERNAME: process.env.MONGODB_USERNAME || 'joey',
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || 'supersecretpassword',
}