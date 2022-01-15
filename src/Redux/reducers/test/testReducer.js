import { testsAPI } from "../../../API/Api";

const SET_CURRENT_HOL_PAGE = "SET_CURRENT_HOL_PAGE";
const SET_CURRENT_USC_PAGE = "SET_CURRENT_USC_PAGE";
const SET_CURRENT_HOL_PROGRESS = "SET_CURRENT_HOL_PROGRESS"
const SET_CURRENT_USC_PROGRESS = "SET_CURRENT_USC_PROGRESS"
const SET_TESTS = "SET_TESTS";
const initialState = {
  currentHolPage: 0,
  currentHolProgress : 0,
  currentUscPage: 0,
  currentUscProgress: 0,
  tests: {}
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_HOL_PAGE:
      return {
        ...state,
        currentHolPage : action.payload.currentHolPage
      }
    case SET_CURRENT_USC_PAGE:
      return {
        ...state,
        currentUscPage: action.payload.currentUscPage
      }
    case SET_CURRENT_HOL_PROGRESS:
      return {
        ...state,
        currentHolProgress: action.payload.currentHolProgress
      }
    case SET_CURRENT_USC_PROGRESS:
      return {
        ...state,
        currentUscProgress: action.payload.currentUscProgress
      }
    case SET_TESTS:
      return {
        ...state,
        tests: {...action.payload}
      }

    
    default:
      return state;
  }
}
export const setCurrentHolPage = (currentHolPage) => ({
  type: SET_CURRENT_HOL_PAGE,
  payload: {
    currentHolPage
  }
}) 
export const setCurrentUscPage = (currentUscPage) => ({
  type: SET_CURRENT_USC_PAGE,
  payload: {
    currentUscPage
  }
}) 
export const setCurrentHolProgress = (currentHolProgress) => ({
  type: SET_CURRENT_HOL_PROGRESS,
  payload: {
    currentHolProgress
  }
}) 
export const setCurrentUscProgress = (currentUscProgress) => ({
  type: SET_CURRENT_USC_PROGRESS,
  payload: {
    currentUscProgress
  }
}) 

export const setTests = (tests) => ({
  type: SET_TESTS,
  payload : {tests}
})

export const sendHolTestData = (data) => {
  console.log(data)
  testsAPI.sendHolQuizzAnswer(data.id, data.index, data.name)
  .then(response => console.log(response))
}
export const sendUscTestData = (data) => {
  console.log(data)
  testsAPI.sendUscQuizzAnswer(data.id, data.index, data.code)
  .then(response => console.log(response))
}

export default testReducer;