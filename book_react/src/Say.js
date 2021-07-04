import React, { useState } from 'react';

const Say = () => {
    // 보통 첫번째 값을 state, 두번째 값을 setSate로 지정한다.
    // useState('') 안에 초기 상태를 지정할 수 있다.
    const [message, setMessage] = useState('기본값');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');
    
    const [color, setColor] = useState('black'); // 초기 state는 검정
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>

            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>
                초록색
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                파란색
            </button>
        </div>
    )
};

export default Say;