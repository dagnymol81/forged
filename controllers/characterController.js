const Character = require('../models/Character')
const mongoose = require('mongoose')

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

const find = async (req, res) => {
  try {
    const foundCharacter = await Character.findById(req.params.id)
    res.status(200).json({ character: foundCharacter })
} catch (error) {
    res.status(400).json({ error: error.message })
}
}

const update = async (req, res) => {

  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such character'})
  }

  console.log('update req.body' + req.body)

  try {
    const foundCharacter = await Character.findOneAndUpdate({_id: id}, 
     {
        ...req.body
     } 
    )
    res.status(200).json({ character: foundCharacter })
  } catch(error) {
    res.status(400).json({ error: error.message })
  }

}

module.exports = {
    index, 
    add,
    find,
    update
}