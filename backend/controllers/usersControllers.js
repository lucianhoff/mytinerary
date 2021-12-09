const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const usersControllers = {

    newUser: async(req, res) => {
        
        const  { firstName, lastName, email, password, photoURL, country } = req.body
        
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
                    country
                })

                await newUser.save()
                res.json( { success: true, response: newUser, error: null } )
            }
        } catch (error) {
            res.json( { success: false, response: null } )
        }
    },
    accessAccount: async(req, res) => {
        const { email, password } = req.body

        try {
            
            const userExists = await User.findOne( { email } )

            if(!userExists) {
                res.json( { success: true, error: "Email or Password is incorrect" } )

            } else {
                let passwordMatch = bcryptjs.compareSync(password, userExists.password)

                if (passwordMatch) {
                    res.json({success:true, response: { email } ,error:null})
                } else {
                    res.json({success: true, error: "Email or Password is incorrect" })
                }
            }
        } catch(error) {
            res.json({success: false, response: null, error: error})
        }
    }
}

module.exports = usersControllers