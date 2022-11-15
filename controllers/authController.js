const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const createToken = (payload) => {
  console.log('creating token')
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' })
}


const register = async (req, res) => {

    try {

    // 1. Check if the user exists

        const foundUser = await User.findOne({ username: req.body.username })

        if (foundUser) {
            return res.status(400).json({ error: 'User already exists' })
        }

    // 2. If they don't exist, encrypt their password

        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(req.body.password, salt)

    // 3. Add the new user to the database with their encrypted password

        const newUser = await User.create({ ...req.body, password: encryptedPassword })

    // 4. Generate a JWT token and return it to the user

        const payload = { id: newUser._id, user: newUser.username }
        console.log(payload)

        const token = createToken(payload)

        console.log('token created' + token)

        res.status(200).json({ token })

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

const login = async (req, res) => {

    try {
    // 1. Check if the user exists

        const foundUser = await User.findOne({ username: req.body.username })

        if (!foundUser) {
            return res.status(404).json({ error: 'No such user exists' })
        }

    // 2. Check if the password provided by the user matches the database password

        const validPass = await bcrypt.compare(req.body.password, foundUser.password)

        if (!validPass) {
            return res.status(403).json({ error: 'Invalid credentials '})
        }

    // 3. Generate a token and return it to the user

        const payload = { id: foundUser._id, user: foundUser.username }

        const token = createToken(payload)
        console.log(token)

        setTimeout(() => {
          res.status(200).json({ token })
        }, 1000)

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

const test = async (req, res) => {
  try {
    res.status(200).send("Hello!")
  }
  catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
    register,
    login,
    test
}