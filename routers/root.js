const express = require('express')
const router = express.Router()
const apiVersions = {
    'Version 1': 'v1'
};

router.get('/', (req, res) => {
    res.render('home', {pageTitle: 'home'})
})

router.get('/about', (req, res) => {
    res.render('about', {pageTitle: 'about'})
})

router.get('/projects', (req, res) => {
    res.render('projects', {pageTitle: 'projects'})
})

router.get('/login', (req, res) => {
    res.render('login', {pageTitle: 'login'})
})

router.get('/api', (req, res) => {
    res.json(apiVersions)
})

for (var i in apiVersions) {
    router.use('/api/' + apiVersions[i], require(`./${apiVersions[i]}/api.js`));
}

module.exports = router