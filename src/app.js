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
const Button = (props) => {
    return (
        <button onClick={() => {
            alert(props.text);
        }}>Click me</button>
    );
};
const element = (
    <>
        <Button text="Hello World" />
    </>
);

ReactDOM.render(element, root);