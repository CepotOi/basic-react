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
    const [login, setLogin] = React.useState(false);

    return (
        <>
            <h1>{login && 'You are logged in'}</h1>
            <button onClick={() => setLogin(true)}>Login</button>
        </>
    );
};

ReactDOM.render(<App />, root);