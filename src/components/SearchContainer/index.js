import React, { Component } from "react";

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.props.updateSearch(e.target.value);
    // this.props.searchTodo(e.target.value);
  };

  render() {
    return (
      Object.keys(this.props.todos).length > 0 && (
        <React.Fragment>
          <div>Search Todos:</div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </React.Fragment>
      )
    );
  }
}

export default SearchContainer;
