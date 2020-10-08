const express = require('express');
const router = express();

router.get('/', (req, res) => res.send('get auth user'));

router.post('/', (req, res) => res.send('post auth user'));

module.exports = router;
