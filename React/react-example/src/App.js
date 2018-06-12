import React, { Component } from "react";
let cnt = 1;

class App extends Component {
  formRef = React.createRef();

  state = {
    todos: [
      {
        id: cnt++,
        body: "react",
        complete: true
      },
      {
        id: cnt++,
        body: "redux",
        complete: false
      }
    ]
  };

  handleNewTodo = newTodoBody => {
    const newTodo = {
      id: cnt++,
      body: newTodoBody,
      complete: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  componentDidMount() {
    console.log(this.formRef.current);
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoForm ref={this.formRef} onAdd={this.handleNewTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

class TodoForm extends React.Component {
  inputRef = React.createRef();

  state = {
    newTodoBody: ""
  };

  handleInputUpdate = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  };

  handleBtnClick = e => {
    this.props.onAdd(this.state.newTodoBody);
    this.setState({
      newTodoBody: ""
    });
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { onAdd } = this.props;
    const { newTodoBody } = this.state;
    return (
      <div>
        <label>New Todo</label>
        <input
          ref={this.inputRef}
          type="text"
          value={newTodoBody}
          onChange={this.handleInputUpdate}
        />
        <button onClick={this.handleBtnClick}>add</button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    return <ul>{todos.map(todo => <li key={todo.id}>{todo.body}</li>)}</ul>;
  }
}

export default App;
