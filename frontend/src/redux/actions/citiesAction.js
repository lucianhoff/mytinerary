import axios from "axios";

const citiesAction = {
  fetchCities: () => {
    return (dispatch, getState) => {
      axios
        .get("http://localhost:4000/api/cities")
        .then((res) =>
          dispatch({ type: "ALL_CITIES", payload: res.data.response })
        );
    };
  },
  findCity: (id) => {
    return (dispatch, getState) => {
      dispatch({ type: "FIND_CITY", payload: { id } })
    };
  },
  filter: (place, value) => {
    return (dispatch, getState) => {
      dispatch({type: "FILTER", payload: {place: place, value: value} })
    }
  }
};

export default citiesAction;
