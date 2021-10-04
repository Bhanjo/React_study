import { useReducer } from "react";

// 리듀서를 발생시키는 함수
function reducer(state, action) {
    // 리듀서는 불변성을 지켜야한다!
    return{
        ...state, // state 파라미터를 복사
        [action.name]: action.value // action의 name에 따라 해당 state에 value를 바꿔준다
    };
}

export default function CustomHooks(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange];
}