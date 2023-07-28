import { SHOW_LOGIN_POPUP, HIDE_LOGIN_POPUP } from '../actions/loginActions';

const initialState = {
  showLoginPopup: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN_POPUP:
      return {
        ...state,
        showLoginPopup: true,
      };
    case HIDE_LOGIN_POPUP:
      return {
        ...state,
        showLoginPopup: false,
      };
    default:
      return state;
  }
};
