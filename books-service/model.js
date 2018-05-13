const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
    required: 'Please fill Name',
    trim: true
  },
  status: {
    type: String,
    default: "active"
  },
});

module.exports = (() => {
  if (mongoose.models.Book) {
    return mongoose.model('Book')
  } else {
    return mongoose.model('Book', BookSchema);
  }
})();