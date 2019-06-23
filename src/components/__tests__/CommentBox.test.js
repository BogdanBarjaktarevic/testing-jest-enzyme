import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("should render textarea and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("should have textarea that user can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

it("should have value of empty string when submitted", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  wrapped.update();

  wrapped.find("form").simulate("submit");
  wrapped.update();

  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
