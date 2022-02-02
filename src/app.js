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
const Button = () => {
    const [count, setCount] = React.useState(0);

    const decremenet = () => {
        if (count > -10 && count <= 10) {
            setCount(count - 1);
        }
    };
    const increment = () => {
        if (count >= -10 && count < 10) {
            setCount(count + 1);
        }
    };

    return (
        <>
            <button onClick={decremenet}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </>
    );
};

ReactDOM.render(<Button />, root);