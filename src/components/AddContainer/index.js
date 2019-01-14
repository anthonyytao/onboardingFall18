import React, { Component } from "react";

class AddContainer extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      id: ""
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.setState({ id: Date.now() });
  };

  handleSubmit = e => {
    this.props.addTodo(this.state);
    this.setState({ value: "" });
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={() => this.handleSubmit()}>Add</button>
      </React.Fragment>
    );
  }
}

export default AddContainer;
