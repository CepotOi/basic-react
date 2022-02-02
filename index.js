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
const tick = () => {
    const element = (
        <>
            <h1>Hello World</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </>
    );

    ReactDOM.render(element, root);
};

setInterval(tick, 1000);