import React, { Component } from 'react';

class Counter extends Component {
    // constructor를 쓰지 않고 state 초기값 지정
    state = {
        number: 0,
        fixedNumber: 0,
    };
    /* constructor(props) {
         super(props);
         // state 초기화
         this.state = {
             number: 0,
             fixedNumber: 0,
         };
    }*/
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                onClick= { () => {
                    // state의 변경: setState
                    // this.setState({ number: number + 1});
                    // 바로 이전 state를 받아와서 구현
                    // this.setState(prevState => ({number: prevState.number + 1}));

                    // this.setState 끝난 후 특정 작업 실행
                    // 두 번째 파라미터에 콜백 함수를 등록한다
                    this.setState(
                        {number: number + 1}, () => {
                        console.log('방금 setState 호출됨');
                        console.log(this.state);
                    })
                }}
                >
                    +1
                </button>
            </div>
        )
    }
}

export default Counter;