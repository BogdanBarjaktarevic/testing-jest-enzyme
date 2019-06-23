import { SAVE_COMMENT } from "../../actions/actionTypes";
import commentsReducer from "../commentReducer";

it("should check if SAVE_COMMENT works correctly", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment"
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["new comment"]);
});

it("should handle unknow action type", () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});
