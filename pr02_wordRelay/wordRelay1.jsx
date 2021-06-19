// class로 구현
const React = require('react');
// const { Module } = require('webpack');
const { Component } = React;

class WordRelay extends Component {
    state = {
        word: '한조',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length -1] === this.state.value[0]) {
            this.setState({
                result: '정답!',
                word: this.state.value,
                value: '',
            });
            this.input.focus();
        } else {
            this.setState({
                result: '오답!',
                value: '',
            });
            this.input.focus();
        }
    };
    onChangeInput = (e) => {
        this.setState({ value: e.currentTarget.value});
    };
    input;
    onRefInput = (c) => {
        this.input = c;
    };

    render() {
        return (<>
            <div>{this.state.word}</div>
            <form onSubmit={this.onSubmitForm}>
                <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                <button>입력</button>
            </form>
            <div>{this.state.result}</div>
        </>);
    }
}

module.exports = WordRelay;