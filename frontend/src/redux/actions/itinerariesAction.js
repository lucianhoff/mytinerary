import axios from "axios";

const itineraryAction = {
  getItineraryByCity: (idCity) => {
    return async (dispatch, getState) => {
      let res = await axios.get(
        `http://localhost:4000/api/itinerarycity/${idCity}`
      );

      dispatch({ type: "GET_ITINERARY", payload: res.data.response });
    };
  },
  LikeAndDislike: (like) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token");
      try {
        await axios.put(
          `http://localhost:4000/api/itinerary/likes`,
          {
            ...like,
          },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );

        return { success: true };
      } catch (err) {
        console.log(err);
      }
    };
  },
};
export default itineraryAction;
