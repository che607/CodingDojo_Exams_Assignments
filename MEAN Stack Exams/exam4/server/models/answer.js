const mongoose = require('mongoose');

const {Schema} = mongoose;

const answerSchema = new Schema({
  answer: {
    type: String,
    required: [true, "Question cannot be blank."],
    minlength: [5, "Question must be at least 5 characters"],
    trim: true,
  },
  user: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  likes: {
    type: Number,
    trim: true,
  },
  _question: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Answer', answerSchema);
