const mongoose = require('mongoose');

const {Schema} = mongoose;

const questionSchema = new Schema({
  question: {
    type: String,
    required: [true, "Question must not be blank."],
    minlength: [15, "Question must be at least 15 characters."],
    trim: true,
  },
  correct: {
    type: String,
    required: [true, "Correct Answer must not be blank."],
    trim: true,
  },
  fake1: {
    type: String,
    required: [true, "Fake Answer 1 must not be blank."],
    trim: true,
  },
  fake2: {
    type: String,
    required: [true, "Fake Answer 2 must not be blank."],
    trim: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);
