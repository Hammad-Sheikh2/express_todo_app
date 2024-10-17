const express = require('express');
const taskRoutes = require('./task');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/tasks');
});

router.use('/tasks', taskRoutes);

module.exports = router;
