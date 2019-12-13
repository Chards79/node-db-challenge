const express = require('express');
const knex = require('knex');
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './data/organization.db3'
    },
    useNullAsDefault: true
});

const router = express.Router();
router.use(express.json());

// GET all tasks

router.get('/', (req, res) => {
    db('tasks')
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve tasks', err });
        });
});

module.exports = router;