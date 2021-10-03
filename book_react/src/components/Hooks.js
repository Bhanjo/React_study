import { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) { // action type에 따라 다른 값 변경
        case 'INCREMENT':
            return { number: state.number + 1};
        case 'DECREMENT':
            return { number: state.number - 1};
        default:
            return state;
    }
}

const Hooks = () => {
    // const [name, setName] = useState('')
    // useEffect(() => {
    //     console.log('useEffect를 실행합니다' + name);
    //     return () => { // 뒷정리 함수 실행
    //         console.log('뒷정리 함수가 실행됨'+ name);
    //     };
    // },[name]);
    // const onChange = e => {
    //     setName(e.target.value)
    // }

    const [state, dispatch] = useReducer(reducer, { number: 0 })

    return(
        <>
            <h1>Hooks 사용 연습</h1>
            {/* <input
                name='name'
                onChange={onChange}
            />
            <h1>입력: {name}</h1> */}
            <p>현재 값은 {state.number}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+ 1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>- 1</button>
        </>
    );
}

export default Hooks