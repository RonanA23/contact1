const express = require('express');
const router = express();

router.get('/', (req, res) => res.send('get all contacts'));

router.post('/', (req, res) => res.send('post a contact'));

router.put('/', (req, res) => res.send('update a contact'));

router.delete('/', (req, res) => res.send('delete a contact'));

module.exports = router;
