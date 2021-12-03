import axios from 'axios'

const itineraryAction = {
    
    getItineraryByCity: (idCity) => {
        return async(dispatch, getState) => {
            let res = await axios.get(`http://localhost:4000/api/itinerarycity/${idCity}`)
            let information = res.data.response

            dispatch({type: "GET_ITINERARY", payload: information})
        }
    }
}

export default itineraryAction