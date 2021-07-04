import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message:'',
    }

    // 이벤트 핸들 메소드
    handleChange = (e) => {
        this.setState({
            // 타겟의 이름에 따라 state에 input의 값 저장
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.username +': ' + this.state.message);
        this.setState({
            username: '',
            message: '',
        })
    }

    render() {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder="입력하세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default EventPractice;