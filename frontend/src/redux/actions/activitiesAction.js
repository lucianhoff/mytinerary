import axios from "axios";

const activitiesActions = {
  activityOfItinerary: (itineraryId) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.get(
          `https://mytinerary-aguirre.herokuapp.com/api/activities/${itineraryId}`
        );
        return { success: true, response: response.data.response };
      } catch (error) {
        return {
          success: false,
          response: error,
        };
      }
    };
  },
};
export default activitiesActions;
