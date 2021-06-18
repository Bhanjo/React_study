const React = require('react');
const { Module } = require('webpack');
const { Component } = React;
class wordRelay extends Component {
    state = {

    };

    render() {

    }
}

// 컴포넌트를 바깥 모듈에서 쓸 수 있게 해줌
Module.exports = wordRelay;