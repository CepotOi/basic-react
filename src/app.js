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
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        // init first time for component
        console.log('Fetch Data');

        return () => {
            // cleanup
            console.log('Cleanup');
        };
    });

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>Increment</button>
        </>
    );
};

ReactDOM.render(<App />, root);