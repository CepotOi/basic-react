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
const Hello = (props) => {
    return <p>Hello <b>{props.name}</b></p>;
};
const element = (
    <>
        <Hello name="World" />
        <Hello name="Rizki" />
        <Hello name="Udin" />
    </>
);

ReactDOM.render(element, root);