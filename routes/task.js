const express = require('express');
const {
    index,
    create,
    show,
    update,
    destroy,
    taskStatus
} = require('../controllers/task_controller');

const router = express.Router();

router.get('/taskStatus', taskStatus);
router.route('/')
    .get(index)
    .post(create);

router.route('/:id')
    .get(show)
    .put(update)
    .patch(update)
    .delete(destroy);

module.exports = router;
