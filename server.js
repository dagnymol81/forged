const express = require('express')
const cors = require('cors')

require('dotenv').config()

const mongoConfig = require('./config')

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const todosRoutes = require('./routes/todosRoutes')

const { authorize } = require('./middleware/authMiddleware')

const app = express()

const PORT = 8080

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/users', authorize, userRoutes)
app.use('/todos', authorize, todosRoutes)


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    mongoConfig()
})

