const mongoose = require('../database')

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    awnser: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Question = mongoose.model('Question',QuestionSchema);

module.exports = Question;