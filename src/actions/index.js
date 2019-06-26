import { SAVE_COMMENT } from "./actionTypes";
import { FETCH_COMMENTS } from "./actionTypes";
import axios from "axios";

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  return async dispatch => {
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
      dispatch({
        type: FETCH_COMMENTS,
        payload: response.data
      })
    }catch(error){
      console.log(error)
    }
  }


}
