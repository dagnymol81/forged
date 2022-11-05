const mongoose = require('mongoose')

const Schema = mongoose.Schema

const characterSchema = new Schema({ 
    user: { type: String, required: true },
    characterName: { type: String, default: '' },
    crew: { type: String, default: '' },
    alias: { type: String, default: '' },
    look: { type: String, default: '' },
    heritage: { type: String, default: '' },
    background: { type: String, default: '' },
    vice: { type: String, default: '' },
    purveyor: { type: String, default: '' }
  })

const CharacterModel = mongoose.model('Character', characterSchema)

module.exports = CharacterModel