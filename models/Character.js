const mongoose = require('mongoose')

const Schema = mongoose.Schema

const characterSchema = new Schema({ 
    user: { type: String, },
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
    level3harm: { type: String, default: '' },
    level2First: { type: String, default: ''},
    level2Second: { type: String, default: '' },
    level1First: { type: String, default: '' },
    level1Second: { type: String, default: '' },
    abilities: { type: Array, default: []},
    friends: [],
    items: [],
    coin: 0,
    stash: 0,
    skill1: 0,
    skill2: 0,
    skill3: 0,
    skill4: 0,
    skill5: 0,
    skill6: 0,
    skill7: 0,
    skill8: 0,
    skill9: 0,
    skill10: 0,
    skill11: 0,
    skill12: 0,
    insightXP: 0,
    prowessXP: 0,
    resolveXP: 0,
    trigger1: '',
    trigger2: ''
  })

const CharacterModel = mongoose.model('Character', characterSchema)

module.exports = CharacterModel