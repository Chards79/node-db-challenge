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

// GET all resources

router.get('/', (req, res) => {
    db('resources')
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve resources', err });
        });
});

module.exports = router;