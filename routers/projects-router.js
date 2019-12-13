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

// GET all projects

router.get('/', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve projects', err });
        });
});

module.exports = router;