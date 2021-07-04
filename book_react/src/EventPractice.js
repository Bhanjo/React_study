import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const {username, message} = form;

    // 이벤트 핸들링
    const onChange = e => {
        const nextForm = {
            ...form, // form의 사본을 만들기 위해 spread연산자(...) 사용
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ": " + message);
        setForm({
            username: '',
            message: '',
        });
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>컴포넌트형 이벤트</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="메시지"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;