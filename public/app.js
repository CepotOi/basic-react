/**
 ** With vanilla JS
 */
// const root = document.querySelector('#root');
// const element = document.createElement('element');
// element.textContent = 'Hello World';
// root.appendChild(element);

/**
 ** With React
 */
const root = document.querySelector('#root');

const App = () => {
  const [activities, setActivity] = React.useState('');
  const [editTodos, setEditTodos] = React.useState({});
  const [todos, setTodo] = React.useState([]);
  const [messages, setMessage] = React.useState('');
  const generateId = Date.now();

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!activities) {
      return setMessage('Please enter a todo!');
    } else {
      setMessage('');
    }

    if (editTodos.id) {
      const editTodo = { ...editTodos,
        activities
      };
      const editTodoIndex = todos.findIndex(todo => todo.id === editTodos.id);
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = editTodo;
      setTodo(updatedTodos);
      return cancelEditHandler();
    }

    setTodo([...todos, {
      id: generateId,
      activities,
      completed: false
    }]);
    setActivity('');
  };

  const completedHandler = todo => {
    const updatedTodo = { ...todo,
      completed: todo.completed ? false : true
    };
    const updatedTodos = [...todos];
    const updatedTodoIndex = updatedTodos.findIndex(currentTodo => currentTodo.id === todo.id);
    updatedTodos[updatedTodoIndex] = updatedTodo;
    setTodo(updatedTodos);
  };

  const editTodoHandler = todo => {
    setActivity(todo.activities);
    setEditTodos(todo);
  };

  const cancelEditHandler = () => {
    setActivity('');
    setEditTodos({});
  };

  const deleteTodoHandler = id => {
    setTodo(todos.filter(todo => todo.id !== id));
    if (editTodos.id) cancelEditHandler();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple TODO list"), messages && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red'
    }
  }, messages), /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmitHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "todo",
    name: "todo",
    onChange: e => setActivity(e.target.value),
    value: activities
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, editTodos.id ? 'Save' : 'Create'), editTodos.id && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: cancelEditHandler
  }, "Cancel")), todos.length == 0 ? /*#__PURE__*/React.createElement("h3", null, "No Todos") : /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onChange: completedHandler.bind(this, todo),
      checked: todo.completed
    }), todo.completed ? /*#__PURE__*/React.createElement("del", null, todo.activities) : todo.activities, /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: deleteTodoHandler.bind(this, todo.id)
    }, "Delete"));
  })));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);