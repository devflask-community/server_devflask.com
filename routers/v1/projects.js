const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    //res: all projects
})

router.get('/:projectId', (req, res) => {
    //res: project by id
})

module.exports = router