const React = require('react');
const ReactDom = require('react-dom');


// 모듈 불러옴
const WordRelay = require('./wordRelay');

ReactDom.render(<WordRelay/>, document.querySelector('#root'))