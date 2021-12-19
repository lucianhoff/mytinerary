import axios from 'axios'

const commentAction = {

    addComment: (id, comment) => {
        
        return async(dispatch, getState) => {
            await axios.post(`http://localhost:4000/api/itineraries/comments/${id}`, { ...comment})
        }
    },
    deleteComment: (idItinerary, idComment) => {
        return async(dispatch, getState) => {
            await axios.delete(`http://localhost:4000/api/itineraries/comments/${idItinerary}/${idComment}`)
        }
    },
    updateComment: (id, comentary) => {
        return async(dispatch, getState) => {
            await axios.put(`http://localhost:4000/api/itineraries/comments/${id}`, { ...comentary})
        }
    }

} 

export default commentAction