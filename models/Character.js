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
    purveyor: { type: String, default: '' },
    stress: { type: Number, default: 0},
    trauma: { type: Number, default: 0},
    injuries: { type: Array, default: 0},
    harm: { type: Number, default: 0},
    healing: { type: Number, default: 0},
    usedArmor: { type: Boolean, default: false },
    usedHeavy: { type: Boolean, default: false },
    usedSpecial: { type: Boolean, default: false },
    notes: { type: String, default: '' },
  })

const CharacterModel = mongoose.model('Character', characterSchema)

module.exports = CharacterModel