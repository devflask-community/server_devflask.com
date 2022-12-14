const express =  require('express')
const rootRouter = require('./routers/root.js');

const server = express()
const serverPort = 8080

//Static Files
server.use('/public', express.static('./client/public'))

//Templating Engine
server.set('views', './client/views')
server.set('view engine', 'ejs')

//Routes
server.use('/', rootRouter)

//Listen to port
server.listen(serverPort, () => console.log(`Server online @ http://localhost:${serverPort}`))