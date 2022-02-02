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

const Button = () => {
  const [count, setCount] = React.useState(0);

  const decremenet = () => {
    if (count > -10 && count <= 10) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count >= -10 && count < 10) {
      setCount(count + 1);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: decremenet
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: increment
  }, "+"));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Button, null), root);