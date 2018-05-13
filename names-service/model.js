const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NameSchema = new Schema({
  name: {
    type: String,
    required: 'Please fill Name',
    trim: true
  },
  surname: {
    type: String,
    required: 'Please fill Surname',
    trim: true
  },
});

module.exports = (() => {
  if (mongoose.models.Name) {
    return mongoose.model('Name')
  } else {
    return mongoose.model('Name', NameSchema);
  }
})();