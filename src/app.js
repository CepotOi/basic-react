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

    const [blogs, setBlog] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(async () => {
        const uri = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
        const responses = await uri.json();

        setBlog(responses);
        setLoading(false);
    }, []);

    return (
        <>
            <h1>Feth API</h1>

            {loading && <p>Loading...</p>}
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.newsSite}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

ReactDOM.render(<App />, root);