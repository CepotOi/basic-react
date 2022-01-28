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
const element = (
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Avocado</li>
    <li>Grape</li>
  </ul>
);

ReactDOM.render(element, root);