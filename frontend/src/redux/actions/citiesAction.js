import axios from "axios";

const citiesAction = {
  fetchCities: () => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.get(
          "https://mytinerary-aguirre.herokuapp.com/api/cities"
        );

        dispatch({ type: "ALL_CITIES", payload: res.data.response });

        return { success: true };
      } catch (e) {
        console.log(e);
      }
    };
  },
  findCity: (id) => {
    return (dispatch, getState) => {
      dispatch({ type: "FIND_CITY", payload: { id } });
      return { success: true };
    };
  },
  filter: (place, value) => {
    return (dispatch, getState) => {
      dispatch({ type: "FILTER", payload: { place: place, value: value } });
    };
  },
};

export default citiesAction;
