import { SHOW_REGISTER_POPUP, HIDE_REGISTER_POPUP } from '../actions/registerAction';

const initialState = {
  showRegisterPopup: false,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_REGISTER_POPUP:
      return {
        ...state,
        showRegisterPopup: true,
      };
    case HIDE_REGISTER_POPUP:
      return {
        ...state,
        showRegisterPopup: false,
      };
    default:
      return state;
  }
};
