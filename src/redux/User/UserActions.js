import { USER_LOGIN, USER_LOGOUT } from "./UserTypes";

const userLogin = () => {
  return {
    type: USER_LOGIN,
  };
};

const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export { userLogin, userLogout };
