import axios from "axios";

const commentAction = {
  addComment: (id, comment) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        const hola = await axios.post(
          `http://localhost:4000/api/itineraries/comments/${id}`,
          { ...comment },
          { headers: { Authorization: "Bearer " + token } }
        );
        console.log(hola);
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
          `http://localhost:4000/api/itineraries/comments/${idItinerary}/${idComment}`,
          { headers: { Authorization: "Bearer " + token } }
        );
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
          `http://localhost:4000/api/itineraries/comments/${id}`,
          {
            ...comentary,
          },
          { headers: { Authorization: "Bearer " + token } }
        );
      } catch (error) {
        console.log(error);
      }
    };
  },
};

export default commentAction;
