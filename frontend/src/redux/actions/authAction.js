const axios = require('axios')

const authActions = {

    newUser: (values) => {
        return async(dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/user/singup', {...values})
                console.log(user)
                dispatch( { type: 'user', payload: {user} } )
            } catch (error) {
                console.log(error)
            }
        }
    },
    accessAccount: (values) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/user/singin', { ...values })
                console.log(user)
                if(user.data.success && !user.data.error) {
                    localStorage.setItem('token', user.data.response.token)
                    
                    dispatch( { type: 'user', payload: { data: user.data.response } } )
                    console.log('Iniciaste sesion')
                } else {
                    console.log('Error, no iniciaste sesion')
                }

            } catch(error) {
                console.error(error)
            }
        }
    }

}

export default authActions