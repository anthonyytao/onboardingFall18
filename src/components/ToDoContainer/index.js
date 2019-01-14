import React, { Component } from "react";

class ToDoContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Current Todos:</div>
        {Object.keys(this.props.todos).length > 0 ? (
          <ul>
            {this.props.todos.map(todo => {
              return (
                <li key={todo.id}>
                  {todo.value}
                  <button onClick={() => this.props.deleteTodo(todo)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>No Todos to complete</div>
        )}
        {/* {this.props.search && (
          <ul>
            {this.props.todos.map(todo => {
              return (
                <li key={todo.id}>
                  {todo.value}
                  <button onClick={() => this.props.deleteTodo(todo)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        )} */}
      </React.Fragment>
    );
  }
}

export default ToDoContainer;
