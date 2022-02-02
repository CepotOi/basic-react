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
  const [login, setLogin] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, login && 'You are logged in'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLogin(true)
  }, "Login"));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);