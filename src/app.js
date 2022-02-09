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
    const [activity, setActivity] = React.useState('');
    const [editTodos, setEditTodos] = React.useState({});
    const [todos, setTodos] = React.useState([]);
    const [messages, setMessage] = React.useState('');

    const generateId = Date.now();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!activity) {
            return setMessage('Please enter a todo!');
        } else {
            setMessage('');
        }

        if (editTodos.id) {
            const editTodo = {
                ...editTodos,
                activity,
            };

            const editTodoIndex = todos.findIndex((todo) => todo.id === editTodos.id);
            const updatedTodos = [...todos];
            updatedTodos[editTodoIndex] = editTodo;
            setTodos(updatedTodos);
            return cancelEditHandler();
        }

        setTodos([...todos, {
            id: generateId,
            activity,
            completed: false,
        }]);
        setActivity('');
    };

    const completedHandler = (todo) => {
        const updatedTodo = {
            ...todo,
            completed: todo.completed ? false : true,
        };

        const updatedTodos = [...todos];
        const updatedTodoIndex = updatedTodos.findIndex((currentTodo) => currentTodo.id === todo.id);
        updatedTodos[updatedTodoIndex] = updatedTodo;
        setTodos(updatedTodos);
    };

    const editTodoHandler = (todo) => {
        setActivity(todo.activity);
        setEditTodos(todo);
    };

    const cancelEditHandler = () => {
        setActivity('');
        setEditTodos({});
    };

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
        if (editTodos.id) cancelEditHandler();
    };

    return (
        <>
            <h1>Simple TODO list</h1>
            {messages && <p style={{ color: 'red' }}>{messages}</p>}
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    placeholder="todo"
                    name="todo"
                    onChange={(e) => setActivity(e.target.value)}
                    value={activity} />
                <button type="submit">{editTodos.id ? 'Save' : 'Create'}</button>
                {editTodos.id && <button type="button" onClick={cancelEditHandler}>Cancel</button>}
            </form>
            {todos.length == 0 ? (
                <h3>No Todos</h3>
            ) : (
                <ul>
                    {todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" onChange={completedHandler.bind(this, todo)} checked={todo.completed} />
                                {todo.completed ? <del>{todo.activity}</del> : todo.activity}
                                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                                <button onClick={deleteTodoHandler.bind(this, todo.id)}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

ReactDOM.render(<App />, root);