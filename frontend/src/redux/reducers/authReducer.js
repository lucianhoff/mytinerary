const initialState = {
  user: {},
  users: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user":
      return {
        ...state,
        user: action.payload,
      };
    case "users": 
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state;
  }
};

export default authReducer;
