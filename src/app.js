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

    const fruits = ['apple', 'banana', 'orange', 'pear'];

    return (
        <>
            <ul>
                {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
            </ul>
        </>
    );
};

ReactDOM.render(<App />, root);