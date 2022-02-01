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
const style = { width: '100%', height: '100%', border: '1px solid black' };
const element = <img
    src="https://www.wallpapertip.com/wmimgs/232-2326709_nissan-skyline-r34-hd-wallpapers-desktop-wallpaper.jpg"
    alt="GTR 34"
    style={style} />;

ReactDOM.render(element, root);