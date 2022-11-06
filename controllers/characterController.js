const Character = require('../models/Character')

const index = async (req, res) => {
    try {
        const foundCharacters = await Character.find({ user: req.user })
        res.status(200).json({ characters: foundCharacters })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const add = async (req, res) => {
    try {
        const createdCharacter = await Character.create(req.body) 
        res.status(200).json({ character: createdCharacter })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const show = (req, res) => {
  try {
    const foundCharacter = Character.findById( { id: req.id })
    res.status(200).json({ character: foundCharacter })
} catch (error) {
    res.status(400).json({ error: error.message })
}
}

module.exports = {
    index, 
    add,
    show
}