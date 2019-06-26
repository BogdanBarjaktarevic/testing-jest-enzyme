import { SAVE_COMMENT } from "../actions/actionTypes";
import { FETCH_COMMENTS } from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.map(comment => {
        return comment.name
      })
      return [...state, ...comments]
    default:
      return state;
  }
};
