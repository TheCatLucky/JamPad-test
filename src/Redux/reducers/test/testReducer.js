
const SET_CURRENT_HOL_PAGE = "SET_CURRENT_HOL_PAGE";
const SET_CURRENT_USC_PAGE = "SET_CURRENT_USC_PAGE";
const SET_TESTS = "SET_TESTS";
const initialState = {
  currentHolPage: 0,
  currentUscPage: 0,
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

export const setTests = (tests) => ({
  type: SET_TESTS,
  payload : {tests}
})

export default testReducer;