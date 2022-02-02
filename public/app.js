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

const Button = props => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      alert(props.text);
    }
  }, "Click me");
};

const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
  text: "Hello World"
}));
ReactDOM.render(element, root);