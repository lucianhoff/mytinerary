const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usersControllers = {

    newUser: async(req, res) => {
        
        const  { firstName, lastName, email, password, photoURL, country, googleUser } = req.body
        
        try {
            const emailExists = await User.findOne({email})
            if ( emailExists ) {
                res.json( { success: false, error: "The email is already in use.", response: null } )
            } else {
                const encryptedPassword = bcryptjs.hashSync(password, 10)

                const newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password: encryptedPassword,
                    photoURL,
                    country,
                    googleUser
                })

                await newUser.save()
                res.json( { success: true, response: newUser, error: null } )
            }
        } catch (error) {
            res.json( { success: false, response: null } )
        }
    },
    accessAccount: async(req, res) => {
        const { email, password, googleUser } = req.body

        try {
            
            const userExists = await User.findOne( { email } )

            if (userExists.googleUser && !googleUser) {
                res.json({success: false, error: "Tu cuenta esta mal wachin", response: null})
            }
            // console.log(userExists)
            if(!userExists ) {
                res.json( { success: true, error: "Email or Password is incorrect" } )
            } else {
                let passwordMatch = bcryptjs.compareSync(password, userExists.password)

                if (passwordMatch) {
                    const token = jwt.sign({...userExists}, process.env.SECRET_KEY)
                    console.log({ token, ...userExists })
                    res.json({success:true, response: { token, ...userExists._doc }, error:null })
                } else {
                    res.json({success: true, error: "Email or Password is incorrect" })
                }
            }

        } catch(error) {
            res.json({success: false, response: null, error: error})
        }
    },
    accessWithToken: async(req, res) => {
        try {
            const userAuth = req.user
            console.log('try de userController')
            res.json({success: true, response: userAuth, error: null})
        } catch(error) {
            console.log(error)
            console.log('catch de userController')
            res.json({success: false, response: null, error: error})
        }
    }
}

module.exports = usersControllers