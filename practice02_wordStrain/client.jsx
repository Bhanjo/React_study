const React = require('react');
const ReactDom = require('react-dom');

// 컴포넌트 불러오기
const wordRelay = require('./wordRelay');

ReactDom.render(<wordRelay/>, document.querySelector('#root'));