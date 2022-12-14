const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is the v1 api route')
})

router.use('/users', require('./users.js'))
router.use('/projects', require('./projects.js'))

module.exports = router