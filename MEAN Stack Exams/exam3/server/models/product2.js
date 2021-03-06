const mongoose = require('mongoose');

const {Schema} = mongoose;

const product2Schema = new Schema({
  bid: {
    type: Number,
    required: [true, "Bid cannot be blank."],
    trim: true,
  },
  user: {
    type: String,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Product2', product2Schema);
