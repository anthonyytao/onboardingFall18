import React, { Component } from "react";
import ToDoContainer from "./components/ToDoContainer";
import AddContainer from "./components/AddContainer";
import SearchContainer from "./components/SearchContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      todos: []
    };
  }

  addTodo = todo => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  deleteTodo = todo => {
    this.setState({ todos: this.state.todos.filter(el => el !== todo) });
  };

  updateSearch = search => {
    this.setState({ search: search });
  };

  searchTodo = search => {
    this.setState({
      todos: this.state.todos.filter(el => Object.values(el).includes(search))
    });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <AddContainer addTodo={this.addTodo} />
        <ToDoContainer
          todos={this.state.todos}
          search={this.state.search}
          deleteTodo={this.deleteTodo}
        />
        <SearchContainer
          todos={this.state.todos}
          updateSearch={this.updateSearch}
          searchTodo={this.searchTodo}
        />
      </React.Fragment>
    );
  }
}

export default App;
