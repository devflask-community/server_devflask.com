const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    //res: all users
})

router.get('/:userId', (req, res) => {
    //res: user by id
})

module.exports = router