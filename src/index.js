import React from 'react';
import ReactDom from 'react-dom';
import scss from './main.scss'

console.log(scss.toString())

const App = () => <p>Its React with webpack-dev-server</p>

ReactDom.render(<App />, document.getElementById('root'))