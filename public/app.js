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
  const fruits = ['apple', 'banana', 'orange', 'pear'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, fruits.map((fruit, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, fruit))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);