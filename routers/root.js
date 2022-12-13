import Express from 'express'

const rootRouter = Express.Router()

rootRouter.get('/', (req, res) => {
    res.render('home', {pageTitle: 'Home'})
})

export default rootRouter