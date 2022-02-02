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
  const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Hello World"), /*#__PURE__*/React.createElement("h2", null, "It is ", new Date().toLocaleTimeString(), "."));
  ReactDOM.render(element, root);
};

setInterval(tick, 1000);