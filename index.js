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
const ul = React.createElement('ul', null, [
  React.createElement('li', {
    key: 'Apple'
  }, 'Apple'),
  React.createElement('li', {
    key: 'Banana'
  }, 'Banana'),
  React.createElement('li', {
    key: 'Orange'
  }, 'Orange'),
  React.createElement('li', {
    key: 'Avocado'
  }, 'Avocado'),
  React.createElement('li', {
    key: 'Grape'
  }, 'Grape'),
]);

ReactDOM.render(ul, root);