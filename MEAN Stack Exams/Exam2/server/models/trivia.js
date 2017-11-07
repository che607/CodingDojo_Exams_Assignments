const mongoose = require('mongoose');

const {Schema} = mongoose;

const playTriviaSchema = new Schema({
  user: {
    type: String,
    required: [true, "Must choose an answer"],
    trim: true,
  },
  right: {
    type: String,
    required: [true, "Must choose an answer"],
    trim: true,
  },
  wrong: {
    type: String,
    required: [true, "Must choose an answer"],
    trim: true,
  },
}, {
  timestamps: true
});

// function totalCorrectQuestions(){
//   if(question1.length > 0){
//
//   }
// };

module.exports = mongoose.model('playTrivia', playTriviaSchema);
