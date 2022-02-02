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

    const headingRef = React.useRef(null);

    React.useEffect(() => {
        setTimeout(() => {
            headingRef.current.textContent = 'Judul';
        }, 1000);
    });

    return (
        <>
            <h1 ref={headingRef}>Heading</h1>
        </>
    );
};

ReactDOM.render(<App />, root);