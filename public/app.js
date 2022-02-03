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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Feth API"), loading && /*#__PURE__*/React.createElement("p", null, "Loading..."), /*#__PURE__*/React.createElement("ul", null, blogs.map(blog => /*#__PURE__*/React.createElement("li", {
    key: blog.id
  }, /*#__PURE__*/React.createElement("h2", null, blog.title), /*#__PURE__*/React.createElement("p", null, blog.newsSite)))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);