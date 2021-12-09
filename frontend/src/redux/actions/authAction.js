const axios = require('axios')

const authActions = {

    newUser: (firstName, lastName, email, password, photoURL, country) => {
        return async(dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/user/singup', {firstName, lastName, email, password, photoURL, country})
                dispatch( { type: 'user', payload: {user} } )
            } catch (error) {
                console.log(error)
            }
        }
    },
    accessAccount: (email, password) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/user/singin', { email, password })

                if(user.data.success && !user.data.error) {
                    dispatch( { type: 'user', payload: { email: user.data.response } } )
                    console.log('XDDDDDDDDDDDD')
                } else {
                    console.log('esta mal wachin')
                }

            } catch(error) {
                console.error(error)
            }
        }
    }

}

export default authActions