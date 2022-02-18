import { USER_LOGIN, USER_LOGOUT } from "./UserTypes";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const initialState = {
  connected: token ? true : false,
  token: token ? token : "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        connected: true,
        token: token,
      };
    case USER_LOGOUT:
      return {
        ...state,
        connected: false,
        token: "",
      };
    default:
      return state;
  }
};

export default userReducer;
