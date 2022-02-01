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
const name = 'Rizki';
const className = 'my-class';
const element = <h1 className={className}>Hello {name}</h1>;

ReactDOM.render(element, root);