import { useState, useEffect } from 'react'

const Hooks = () => {
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('useEffect를 실행합니다' + name);
        return () => { // 뒷정리 함수 실행
            console.log('뒷정리 함수가 실행됨'+ name);
        };
    },[name]);
    const onChange = e => {
        setName(e.target.value)
    }
    return(
        <>
            <h1>Hooks 사용 연습</h1>
            <input
                name='name'
                onChange={onChange}
            />
            <h1>입력: {name}</h1>
        </>
    );
}

export default Hooks