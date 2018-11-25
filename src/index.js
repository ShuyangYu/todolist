import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import App from './App';

// pwa 访问网页后断网可访问之前的页面
import * as serviceWorker from './serviceWorker';

// jsx 语法, 需要引入 react
ReactDOM.render(<TodoList />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('transition'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
