import { ADD_LIKE, REMOVE_LIKE } from "./UserTypes";

const addLike = () => {
  return {
    type: ADD_LIKE,
  };
};

const removeLike = () => {
  return {
    type: REMOVE_LIKE,
  };
};

export { addLike, removeLike };

