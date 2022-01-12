import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth/authReducer";

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk));
export default store
window.store = store;
