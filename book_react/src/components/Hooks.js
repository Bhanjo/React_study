import { useState, useMemo, useCallback } from 'react'

// 평균값 구하는 연산
const getAverage = numbers => {
    console.log('값 변경됨 연산 실행')
    if (numbers.length === 0) return 0
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

const Hooks = () => {
    const [list, setList] = useState([])
    const [number, setNumber] = useState(''); // 주의) 문자열로 받는다

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    },[]) // 빈 배열 => 최초 렌더링 시 함수 생성

    const onInsert = useCallback(e => {
        // 이전 리스트에 number를 추가한다(이때, number는 문자열이니 int로 형변환을 시킨다)
        const nextList = list.concat(parseInt(number))
        setList(nextList)
        setNumber('');
    }, [number, list]) // number와 list가 변경되었을 때 함수 생성

    // useMemo 선언
    // list 값이 다르면 getAverage를 실행한다
    // 같다면 이전에 연산했던 list를 그대로 가져온다
    const avg = useMemo(() => getAverage(list), [list])

    return(
        <>
            <h1>Hooks 사용 연습</h1>
            <div>
                <input value={number} onChange={onChange} />
                <button onClick={onInsert}>등록</button>
                <ul>
                    {list.map((value, index) =>(
                        <li key={index}>{value}</li>
                    ))}
                </ul>
                <p>평균값: {avg}</p>
            </div>
        </>
    );
}

export default Hooks