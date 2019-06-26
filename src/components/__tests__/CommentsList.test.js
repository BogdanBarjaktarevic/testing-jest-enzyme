import React from "react";
import { mount } from "enzyme";
import CommentList from "../CommentList";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['comment1', 'comment2']
    }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('should render LI for every comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
})

it('should render text inside every LI', () => {
    expect(wrapped.render().text()).toContain('comment1')
    expect(wrapped.render().text()).toContain('comment2')
})