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

  const submited = event => {
    event.preventDefault(); // const name = nameRef.current.value;

    console.log(name);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submited
  }, /*#__PURE__*/React.createElement("label", null, "Name : "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Name",
    name: "name" // ref={nameRef}
    ,
    value: name,
    onChange: event => setName(event.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);