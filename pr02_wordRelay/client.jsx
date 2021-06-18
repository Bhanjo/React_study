const React = require('react');
const ReactDom = require('react-dom');


// 모듈 불러옴
const wordRelay = require('./wordRelay');

ReactDom.render(<wordRelay/>, document.querySelector('#root'))