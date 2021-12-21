import axios from "axios";

const activiesActions = {
  activityItinerary: (itineraryId) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.get(
          `http://localhost:4000/api/activities/${itineraryId}`
        );
        return { response: response.data.response };
      } catch (e) {
        console.log(e);
      }
    }
  }
}

export default activiesActions;