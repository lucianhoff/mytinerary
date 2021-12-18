import axios from 'axios'

const commentAction = {

    addComment: (id, comment) => {
        
        return async(dispatch, getState) => {
            await axios.post(`http://localhost:4000/api/itineraries/comments/${id}`, { ...comment})
        }
    }

} 

export default commentAction