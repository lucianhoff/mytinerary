const initialState = {
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user":
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
