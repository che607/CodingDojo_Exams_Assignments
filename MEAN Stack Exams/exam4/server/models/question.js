const mongoose = require('mongoose');

const {Schema} = mongoose;

const questionSchema = new Schema({
  question: {
    type: String,
    required: [true, "Question cannot be blank."],
    minlength: [10, "Question must be at least 10 characters"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  answerCount: {
    type: Number,
    trim: true,
  },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'Answer'
  }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);
