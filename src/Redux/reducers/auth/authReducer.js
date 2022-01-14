import { authAPI } from "../../../API/Api";

const SET_LOGGED_IN = "SET_LOGGED_IN";
const SET_LOGOUT = "SET_LOGOUT";
const SET_LOADED = "SET_LOADED";
const initialState = {
  isLoggedIn: false,
  isLoaded : false
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
    case SET_LOADED:
      return {
        ...state,
        isLoaded: true
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
export const setAppLoaded = () => ({
  type: SET_LOADED,
})
export const logIn = (email, password) => (dispatch) => {
  authAPI.login(email, password)
    .then(response => {
      dispatch(setUserLoggedIn(true))
      setAppLoaded()
    })
}
export const logOut = () => (dispatch) => {
  authAPI.logout();
  dispatch(setUserLogOut())

}

export default authReducer;