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
            <div style={{ width: '10em', height: '10em', backgroundColor: 'red' }}></div>
        </>
    );

    ReactDOM.render(element, root);
};

setInterval(tick, 1000);