import { LOGIN_SUCCESS, LOGOUT, UPDATE_USER } from "../actions/userAction";

const initialState = {
  account: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        account: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        account: null,
        isLoggedIn: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        account: action.payload,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
