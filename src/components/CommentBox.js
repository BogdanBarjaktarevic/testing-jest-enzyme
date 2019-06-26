import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment } from "../actions/index";
import { fetchComments } from "../actions/index";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState(() => {
      return {
        comment: value
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState(() => {
      return {
        comment: ""
      };
    });
  };

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit</button>
        </div>
      </form>
      <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(
  null,
  {
    saveComment,
    fetchComments
  }
)(CommentBox);
