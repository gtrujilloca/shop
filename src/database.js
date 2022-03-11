const mongoose = require('mongoose');
require('dotenv').config();

const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DB_NAME,
} = process.env;
const db = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@carloscluster.pgwzh.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(db)
  .then(res => console.log(`Connection successful`))
  .catch(err => console.error(`Error connection DB ${err}`));