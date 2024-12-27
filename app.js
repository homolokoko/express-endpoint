require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const userRouter = require('./router/user-router')
const employeeRouter = require('./router/employee-routing')
const departmentRouter = require('./router/department-routing')
const sharedRouter = require('./router/shared-routing')
const ownerRouter = require('./router/owner-routing')

// CORS options
const corsOptions = {
    origin: 'http://localhost:4300', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 200
};


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => { console.error(error) })
db.once('open', () => { console.log('Connection to Database') })

app.use(express.json())
app.use(cors(corsOptions))

app.use('/api/user', cors(), userRouter)

app.use('/api/employee', cors(), employeeRouter)

app.use('/api/department', cors(), departmentRouter)

app.use('/api/shared', cors(), sharedRouter)

app.use('/api/owner', cors(), ownerRouter)


app.listen(8000, () => { console.log('server started') })