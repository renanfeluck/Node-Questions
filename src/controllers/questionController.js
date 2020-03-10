const express = require('express');

const Question = require('../models/question');

const router = express.Router();

router.post('/question', async (req, res) => {
    try {

        const question = await Question.create(req.body);
        return res.send({question})
        
    } catch (error) {
        return res.status(400).send({'error': error});
    }
})

router.get('/questions', async (req, res) => {
    try {

        const questions = await Question.find();
        return res.send({questions})
        
    } catch (error) {
        return res.status(400).send({'error': error});
    }
})

module.exports = app => app.use('', router);