const axios = require("axios");
const Swal = require("sweetalert2");

const authActions = {
  newUser: (values) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post(
          "https://mytinerary-aguirre.herokuapp.com/api/user/signup",
          {
            ...values,
          }
        );

        if (user.data.success) {
          localStorage.setItem("token", user.data.response.token);
          dispatch({ type: "user", payload: user.data.response });

          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-right",
            showConfirmButton: false,
            timer: 3000,
            confirmButtonColor: "#9333ea",
            background: "#9333ea",
            iconColor: "#e9d5ff",
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: `<span style="color:#FFF" className="rubik"> Welcome, ${user.data.response.firstName}! :)<span>`,
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
      } catch (error) {
        console.log(error);
      }
    };
  },
  accessAccount: (values) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post(
          "https://mytinerary-aguirre.herokuapp.com/api/user/signin",
          {
            ...values,
          }
        );
        if (user.data.success && !user.data.error) {
          localStorage.setItem("token", user.data.response.token);

          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-right",
            showConfirmButton: false,
            timer: 3000,
            confirmButtonColor: "#9333ea",
            background: "#9333ea",
            iconColor: "#e9d5ff",
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: `<span style="color:#FFF" className="rubik"> Welcome, ${user.data.response.firstName}!<span>`,
          });
          dispatch({ type: "user", payload: user.data.response });
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
          "https://mytinerary-aguirre.herokuapp.com/api/user/signin/token",
          {},
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        user.data.response &&
          dispatch({ type: "user", payload: user.data.response });
        return { response: user.data.response };
      } catch (error) {
        return { error: "Unauthorized user, try login again" };
      }
    };
  },
  SignOut: () => {
    return (dispatch, getState) => {
      localStorage.clear();
      dispatch({ type: "user", payload: {} });
    };
  },
  getAllUsers: () => {
    return async (dispatch, getState) => {
      try {
        const users = await axios.get(
          "https://mytinerary-aguirre.herokuapp.com/api/users"
        );
        dispatch({ type: "users", payload: users.data.response });
      } catch (error) {
        console.log(error);
      }
    };
  },
};

export default authActions;
