import React, { Component } from "react";

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
    this.setState(() => {
      return {
        comment: ""
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
