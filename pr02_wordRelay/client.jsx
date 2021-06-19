//require 방식
const React = require('react');
const ReactDom = require('react-dom');

//import 방식

// 모듈 불러옴
const WordRelay = require('./wordRelay');

ReactDom.render(<WordRelay/>, document.querySelector('#root'))