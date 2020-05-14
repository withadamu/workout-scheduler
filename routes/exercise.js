const express = require('express');
const router = express.Router();
let Exercise = require('../models/exercise');

router.get('/', async (req, res) => {
    try {
        const exercises = await Exercise.find({});
        res.json(exercises);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});

router.post('/add', async (req, res) => {
    try {
        const newExercise = new Exercise({
            username: req.body.username,
            description: req.body.description,
            duration: Number(req.body.duration),
            date: Date.parse(req.body.date),
        });

        await newExercise.save();
        res.json('Exercise added');
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);
        res.json(exercise);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        const updateExercise = await Exercise.findById(req.params.id);
        updateExercise.username = req.body.username;
        updateExercise.description = req.body.description;
        updateExercise.duration = Number(req.body.duration);
        updateExercise.date = Date.parse(req.body.date);

        await updateExercise.save();
        res.json('Exercise updated');
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteExercise = await Exercise.findByIdAndDelete(req.params.id);
        res.json('exercise deleted');
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
})

module.exports = router;