export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const UPDATE_USER = 'UPDATE_USER';

// Action creators
export const loginSuccess = (account) => {
  return {
    type: LOGIN_SUCCESS,
    payload: account
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const updateUser = (account) => {
  return {
    type: UPDATE_USER,
    payload: account
  };
}
