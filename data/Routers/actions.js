const express = require('express');
const router = express.Router();
const db = require('../helpers/actionModel.js');

router.get('/', (req, res)=> {

    db.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json(console.error(" Error getting user ", error ));
    })
})

router.get('/:id', (req, res)=> {
    const { id } = req.params;

    db.get(id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json(console.error(" Error getting user ", error ));
    })
})

router.post('/add', (req, res) => {
    const action = req.body

    db.insert(action)
    .then(user=> {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json(console.error( "Error posting ", error))
    })
})

router.put('/:id/update', (req, res) => {
    const { id } = req.params;
    const changes = req.body

    db.update(id, changes)
    .then(updated => {
        res.status(200).json(changes)
    })
    .catch(error => {
        res.status(500).json(console.error( "Error updating ", error))
    })
})

router.delete('/:id/delete', (req, res) => {
    const { id } = req.params;

    db.remove(id)
    .then(removed => {
        res.status(200).json(removed)
    })
    .catch(error => {
        res.status(500).json(console.error( "Error deleting ", error))
    })
})

module.exports = router;