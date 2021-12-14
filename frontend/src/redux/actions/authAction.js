const axios = require('axios')

const authActions = {

    newUser: (values) => {
        return async(dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/user/signup', {...values})
                dispatch( { type: 'user', payload: {user} } )
            } catch (error) {
                console.log(error)
            }
        }
    },
    accessAccount: (values) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/user/signin', { ...values })
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
    },
    accessWithToken: () => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const user = await axios.post('http://localhost:4000/api/user/signin/token', {}, {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                user.data.response && dispatch({ type: 'user', payload: {data: user.data.response} })
                return { response: user.data.response }
            } catch (error) {
                return { error: 'Unauthorized user, try login again' }
            }
        }
    },
    SignOut: () => {
        return (dispatch, getState) => {
            localStorage.clear()
            dispatch({type: 'user', payload: {data: ""}})
        }
    }

}

export default authActions