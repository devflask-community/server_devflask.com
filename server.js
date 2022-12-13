import Express from 'express'
import { rootRouter } from './routers.js'

const server = Express()
const serverPort = 8080

//Static Files
server.use('/public', Express.static('./client/public'))

//Templating Engine
server.set('views', './client/views')
server.set('view engine', 'ejs')

//Routes
server.use('/', rootRouter)

//Listen to port
server.listen(serverPort, () => console.log(`Server online @ http://localhost:${serverPort}`))