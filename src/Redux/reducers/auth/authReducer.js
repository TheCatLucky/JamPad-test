import { authAPI } from "../../../API/Api";

const SET_LOGGED_IN = "SET_LOGGED_IN";
const SET_LOGOUT = "SET_LOGOUT";
const initialState = {
  isLoggedIn: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true
      }
    case SET_LOGOUT:
      return {
        ...state,
        isLoggedIn: false
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
export const setUserLogOut = () => ({
  type: SET_LOGOUT,
})

export const logIn = (email, password) => (dispatch) => {
  authAPI.login(email, password)
    .then(response => {
      dispatch(setUserLoggedIn(true))
    })
}
export const registration = (email, password, firstName, lastName, patronymic) => (dispatch) => {
  authAPI.registration(email, password, firstName, lastName, patronymic)
    .then(response => {

    })
}
export const logOut = () => (dispatch) => {
  authAPI.logout();
  dispatch(setUserLogOut())
}

export default authReducer;