import React from 'react'
import CustomHooks from './CustomHooks'

const Hooks = () => {
    // 커스텀 훅스 사용
    const [state, onChange] = CustomHooks({
        name: '',
        nickname: ''
    });

    // state 상태에 아래의 요소 추가
    const {name, nickname} = state;

    return (
        <>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <p>이름: { name }</p>
                <p>닉네임: { nickname }</p>
            </div>
        </>
    );
}

export default Hooks