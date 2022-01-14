import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth/authReducer";
import testReducer from "./reducers/test/testReducer";

const reducers = combineReducers({
  auth: authReducer,
  test: testReducer,
  form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store
