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

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!activities) {
            return setMessage('Please enter a todo!');
        } else {
            setMessage('');
        }

        if (editTodos.id) {
            const editTodo = {
                ...editTodos,
                activities,
            };

            const editTodoIndex = todos.findIndex((todo) => todo.id === editTodos.id);
            const updatedTodos = [...todos];
            updatedTodos[editTodoIndex] = editTodo;
            setTodo(updatedTodos);
            return cancelEditHandler();
        }

        setTodo([...todos, {
            id: generateId,
            activities,
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
        setTodo(updatedTodos);
    };

    const editTodoHandler = (todo) => {
        setActivity(todo.activities);
        setEditTodos(todo);
    };

    const cancelEditHandler = () => {
        setActivity('');
        setEditTodos({});
    };

    const deleteTodoHandler = (id) => {
        setTodo(todos.filter(todo => todo.id !== id));
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
                    value={activities} />
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
                                {todo.completed ? <del>{todo.activities}</del> : todo.activities}
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