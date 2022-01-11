import { authAPI } from "../API/Api";

const SET_USER_DATA = "SET_USER_DATA";
const initialState = {
  email: null,
  isLoggedIn : false,
  authToken : null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export const logIn = (email, password) => (dispatch) => {
  authAPI.login(email, password)
    .then(response => {
    console.log(response)
  })
}

export default authReducer;