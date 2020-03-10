const mongoose = require('../database')

const stdQuestionnaireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const stdQuestionnaire = mongoose.model('StdQuestionnaire',stdQuestionnaireSchema);

module.exports = stdQuestionnaire;