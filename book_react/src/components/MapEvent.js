import { useState } from 'react'

const MapEvent = () => {
    const [names, setNames] = useState([
        { id: 1, text: '학생1'},
        { id: 2, text: '학생2'},
        { id: 3, text: '학생3'},
    ]);

    const [nextId, setNextId] = useState(4)

    const [nextText, setNextText] = useState('')

    const onChange = e => {
        setNextText(e.target.value)
    }

    const onClick = () => {
        // 기존 배열에 항목을 추가 하기 위해 기존 내용을 복사한다
        const nextName = names.concat({
            // id 값과 text 값을 부여한다
            id: nextId,
            text: nextText
        });

        // 새롭게 만들어진 배열을 기존 배열과 바꿔준다
        setNames(nextName)
        setNextId(nextId + 1) // 다음 id를 위해 증가
        setNextText('') // input 값을 초기화
    }

    const onRemove = id => {
        // filter로 name.id != id 인 요소만 return
        const nextName = names.filter(name => name.id !== id)
        setNames(nextName)
    }

    return(
        <>
        <h1>값을 추가해보세요</h1>
        <input
            placeholder='input name here!'
            value={nextText}
            onChange={onChange}
        />
        <button onClick={onClick}>등록</button>
        <ul>
            {names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)}
        </ul>
        </>
    );
}

export default MapEvent;