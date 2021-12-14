const axios = require("axios");
const Swal = require("sweetalert2");

const authActions = {
  newUser: (values) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/api/user/signup", {
          ...values,
        });

        if (user.data.success) {
          Swal.fire({
            icon: "success",
            title: `<span style="color:#FFF">Thank you for registering, log in!</span>`,
            background: "#9333ea",
            iconColor: "#e9d5ff",
            confirmButtonColor: "#9333ea",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: `<span style="color:#FFF">Email alredy in use</span>`,
            background: "#9333ea",
            iconColor: "#e9d5ff",
            confirmButtonColor: "#9333ea",
          });
        }

        dispatch({ type: "user", payload: { user } });
      } catch (error) {
        console.log(error);
      }
    };
  },
  accessAccount: (values) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/api/user/signin", {
          ...values,
        });
        if (user.data.success && !user.data.error) {
          localStorage.setItem("token", user.data.response.token);

          dispatch({ type: "user", payload: { data: user.data.response } });

          Swal.fire({
            icon: "success",
            title: `<span style="color:#FFF">You started session!</span>`,
            background: "#9333ea",
            iconColor: "#e9d5ff",
            confirmButtonColor: "#9333ea",
          });
        }
        if (!user.data.success && user.data.error) {
          Swal.fire({
            icon: "error",
            title: `<span style="color:#FFF">Error, email not registered!</span>`,
            background: "#9333ea",
            iconColor: "#e9d5ff",
            confirmButtonColor: "#9333ea",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
  },
  accessWithToken: () => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        const user = await axios.post(
          "http://localhost:4000/api/user/signin/token",
          {},
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        user.data.response &&
          dispatch({ type: "user", payload: { data: user.data.response } });
        return { response: user.data.response };
      } catch (error) {
        return { error: "Unauthorized user, try login again" };
      }
    };
  },
  SignOut: () => {
    return (dispatch, getState) => {
      localStorage.clear();
      dispatch({ type: "user", payload: { data: "" } });
    };
  },
};

export default authActions;
