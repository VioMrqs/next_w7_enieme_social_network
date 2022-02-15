import { createStore } from "redux";
import UserReducer from "./User/UserReducer"

const store = createStore(UserReducer);

export default store;
