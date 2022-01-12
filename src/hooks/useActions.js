import { useDispatch} from "react-redux"
import { bindActionCreators } from "redux";
import { setUserLoggedIn } from './../Redux/reducers/auth/authReducer';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(setUserLoggedIn, dispatch)
}