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
      // O SEA ACA HAGO OTRO AXIOS.GET CON ALGUNA CONDICION ADENTRO DEL THEN SUPONGO
     
      // axios
        // .get("http://localhost:4000/api/cities" + id)
        // .then(res => {
          // if (res.data.response > 0) {
            dispatch({ type: "FIND_CITY", payload: { id } });

          // } else {
            
          // }
        // })

    };
  },
  filterCities: () => {
        
  },
};

export default citiesAction;
