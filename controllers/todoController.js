const TodoModel = require('../models/Todo')

const index = async (req, res) => {
    try {
        const foundCurrentUsersTodos = await TodoModel.find({ user: req.user })
        res.status(200).json({ todos: foundCurrentUsersTodos })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const add = async (req, res) => {
    try {
        const createdTodoForCurrentUser = await TodoModel.create(req.body) // req.body -->  { notes: '', user: '' }
        res.status(200).json({ todo: createdTodoForCurrentUser })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    index, 
    add
}