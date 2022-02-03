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

    /**
     ** Uncontrolled Component
     */
    // const nameRef = React.useRef(null);

    /**
     ** Controlled Component
    */
    const [name, setName] = React.useState('');

    const submited = (event) => {
        event.preventDefault();

        // const name = nameRef.current.value;
        console.log(name);
    };

    return (
        <>
            <form onSubmit={submited}>
                <label>Name : </label>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    // ref={nameRef}
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

ReactDOM.render(<App />, root);