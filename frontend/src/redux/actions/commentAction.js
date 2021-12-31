import axios from "axios";

const commentAction = {
  addComment: (id, comment) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://mytinerary-aguirre.herokuapp.com/api/itineraries/comments/${id}`,
          { ...comment },
          { headers: { Authorization: "Bearer " + token } }
        );
        return { success: true };
      } catch (error) {
        console.log(error);
      }
    };
  },
  deleteComment: (idItinerary, idComment) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `https://mytinerary-aguirre.herokuapp.com/api/itineraries/comments/${idItinerary}/${idComment}`,
          { headers: { Authorization: "Bearer " + token } }
        );
        return { success: true };
      } catch (error) {
        console.log(error);
      }
    };
  },
  updateComment: (id, comentary) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        await axios.put(
          `https://mytinerary-aguirre.herokuapp.com/api/itineraries/comments/${id}`,
          {
            ...comentary,
          },
          { headers: { Authorization: "Bearer " + token } }
        );
        return { success: true };
      } catch (error) {
        console.log(error);
      }
    };
  },
};

export default commentAction;
