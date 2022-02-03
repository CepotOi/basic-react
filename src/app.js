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

    const onChangeHandler = (e) => {
        setActivity(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (editTodos.id) {
            const editTodo = {
                id: editTodos.id,
                activities,
            };

            const editTodoIndex = todos.findIndex((todo) => todo.id === editTodos.id);
            const updatedTodos = [...todos];
            updatedTodos[editTodoIndex] = editTodo;
            setTodo(updatedTodos);
            return setActivity('');
        }

        setTodo([...todos, {
            id: generateId,
            activities,
        }]);
        setActivity('');
    };

    const editTodoHandler = (todo) => {
        setActivity(todo.activities);
        setEditTodos(todo);
    };

    const deleteTodoHandler = (id) => {
        setTodo(todos.filter(todo => todo.id !== id));
    };

    return (
        <>
            <h1>Simple TODO list</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="todo" name="todo" onChange={onChangeHandler} value={activities} />
                <button type="submit">{editTodos.id ? 'Save' : 'Create'}</button>
            </form>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            {todo.activities}
                            <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                            <button onClick={deleteTodoHandler.bind(this, todo.id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

ReactDOM.render(<App />, root);