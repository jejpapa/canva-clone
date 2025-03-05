const jwt = require('jsonwebtoken')
const auth = async (req, res, next) => {
    const { authorization } = req.headers

    if (authorization) {
        const token = authorization.split(' ')[1]
        if (token) {
            try {
                const userInfo = await jwt.verify(token, 'wowtoken')
                req.userInfo = userInfo
                next()
            } catch (error) {
                console.log('error...401');
                return res.status(401).json({ message: 'unauthorized11' })
            }
        } else {
            console.log('error...401  222');
            return res.status(401).json({ message: 'unauthorized22' })
        }
    } else {
        console.log('error...401  333');
        return res.status(401).json({ message: 'unauthorized33' })
    }

}

module.exports = auth