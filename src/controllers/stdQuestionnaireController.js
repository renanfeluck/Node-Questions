const express = require('express');

const Question = require('../models/question');
const StdQuestionnaire = require('../models/stdQuestionnaire');

const router = express.Router();

router.post('/stdQuestionnaire', async (req, res) => {
    try {

        const stdQuestionnaire = await StdQuestionnaire.create(req.body);
        return res.send({stdQuestionnaire})
        
    } catch (error) {
        return res.status(400).send({'error': error});
    }
})

router.get('/stdQuestionnaires', async (req, res) => {
    try {

        const stdQuestionnaires = await StdQuestionnaire.find().populate(['questions']);
        return res.send({stdQuestionnaires})
        
    } catch (error) {
        return res.status(400).send({'error': error});
    }
})

module.exports = app => app.use('', router);