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
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    // init first time for component
    console.log('Fetch Data');
    return () => {
      // cleanup
      console.log('Cleanup');
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCount(count + 1);
    }
  }, "Increment"));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);