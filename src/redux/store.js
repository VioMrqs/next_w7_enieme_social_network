import { createStore } from "redux";
import UserReducer from "./user/UserReducer"

const store = createStore(UserReducer);

export default store;
