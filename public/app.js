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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: headingRef
  }, "Heading"));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);