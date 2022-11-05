const jwt = require('jsonwebtoken')

function authorize(req, res, next) {

    try {

        // 1. Check if the user has a token (...if it's in the headers)

        let token = req.header("Authorization")

        if (!token) {
            throw new Error('No token provided')
        }
    
        //    token 
        token = token.replace("Bearer ", "")
 
        // 2. Check that the token provided is valid and not expired

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        //   payload ->  { id, username }

        if (payload.error) {
            throw new Error(payload.error)
        }

        // 3. Attach the payload from the token to the request object

        req.userId = payload.id
        req.user = payload.user

        // 4. Move on to the requested route (next)
        next()

    } catch (error) {
        res.status(403).json({ error: error.message })
    }
}

module.exports = {
    authorize
}

// /info/billy
// authorize()
// info()

