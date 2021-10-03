import { useState, useEffect } from 'react'

const Hooks = () => {
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('useEffect에 의해 출력됨')
        console.log(name)
    });
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