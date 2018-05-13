const mongoose = require('mongoose');
// TODO
const url = `mongodb://localhost:27017/mydb`
// const url = `mongodb://localhost:9000/database/mydb`

const db = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(url)
}

module.exports = db;