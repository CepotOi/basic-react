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
const p1 = React.createElement('p', {
  children: 'Paragraph1',
  key: 'p1',
});
const p2 = React.createElement('p', {
  children: 'Paragraph2',
  key: 'p2',
});
const element = React.createElement(React.Fragment, {
  children: [p1, p2],
});

ReactDOM.render(element, root);