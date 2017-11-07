const mongoose = require('mongoose');

const {Schema} = mongoose;

const product1Schema = new Schema({
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

module.exports = mongoose.model('Product1', product1Schema);
