import React, { useState } from 'react';

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);

    // 이벤트 핸들링
    const onClick = () => {
        alert(username + ': ' + message);
        setUsername('');
        setMessage('');
    }
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    }
    return (
        <div>
            <h1>컴포넌트형 이벤트</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="메시지"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
};

export default EventPractice;