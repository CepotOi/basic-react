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
  const generateId = Date.now();

  const onChangeHandler = e => {
    setActivity(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (editTodos.id) {
      const editTodo = {
        id: editTodos.id,
        activities
      };
      const editTodoIndex = todos.findIndex(todo => todo.id === editTodos.id);
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = editTodo;
      setTodo(updatedTodos);
      return setActivity('');
    }

    setTodo([...todos, {
      id: generateId,
      activities
    }]);
    setActivity('');
  };

  const editTodoHandler = todo => {
    setActivity(todo.activities);
    setEditTodos(todo);
  };

  const deleteTodoHandler = id => {
    setTodo(todos.filter(todo => todo.id !== id));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple TODO list"), /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmitHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "todo",
    name: "todo",
    onChange: onChangeHandler,
    value: activities
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, editTodos.id ? 'Save' : 'Create')), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activities, /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: deleteTodoHandler.bind(this, todo.id)
    }, "Delete"));
  })));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);