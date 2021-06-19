// hooks로 구현
const React = require('react');
const { Component } = React;

const {useState, useRef} = React;
const WordRelay = () => {
    const [word, setWord] = useState('한조');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length -1] === value[0]) {
            setResult('정답!');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('오답!');
            setValue('');
            inputRef.current.focus();
        }
    };
    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (<>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
            <label htmlFor="wordInput">단어입력</label>
            <input placeholder="단어" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
            <button>입력</button>
        </form>
        <div>{result}</div>
    </>);
}

module.exports = WordRelay;