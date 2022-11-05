const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({ 
    notes: { type: String, required: true },
    user: { type: String, required: true }
})

const TodoModel = mongoose.model('Todo', todoSchema)

module.exports = TodoModel