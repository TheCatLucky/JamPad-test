import { authAPI } from "../../../API/Api";

const SET_LOGGED_IN = "SET_LOGGED_IN";
const initialState = {
  isLoggedIn : false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true
      }
    default:
      return state;
  }
}
export const setUserLoggedIn = (isLoggedIn) => ({
  type: SET_LOGGED_IN,
  payload: {
    isLoggedIn
  }
})
export const logIn = (email, password) => (dispatch) => {
  authAPI.login(email, password)
    .then(response => {
      dispatch(setUserLoggedIn(true))
  })
}

export default authReducer;