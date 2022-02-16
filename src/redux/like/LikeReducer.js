import { ADD_LIKE, REMOVE_LIKE } from "./UserTypes";

const initialState = {
  // post:
  // user: 
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
      };
    case REMOVE_LIKE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default likeReducer;
