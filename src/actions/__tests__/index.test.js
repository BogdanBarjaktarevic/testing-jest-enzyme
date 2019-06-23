import { saveComment } from "../index";
import { SAVE_COMMENT } from "../actionTypes";

describe("save comment", () => {
  it("check if action type is correct", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("check if action payload is correct", () => {
    const action = saveComment("new comment");
    expect(action.payload).toEqual("new comment");
  });
});
