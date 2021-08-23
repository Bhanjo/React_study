const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});

let id = 3; // id 초기값
export const insert = text => ({
    type: INSERT,
    todo: { // 객체형태
        id: id++,
        text,
        done: false
    }
});

export const toggle = id => ({
    type: TOGGLE,
    id
})

export const remove = id => ({
    type: REMOVE,
    id
});

// 초기 상태
const initialState = {
    input: '',
    todos: [ // 배열 안 객체
        {
            id: 1,
            text: '리덕스 기초 공부',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용',
            done: false
        }
    ]
};

// 리덕스
function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                // 기존 배열을 복사해 새로운 todos를 만들고 action.todo를 집어넣음
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                // 클릭한 todo의 id와 일치하는 id를 찾는데 같으면 내용 뒤집고 다르면 그대로
                todos: state.todos.map(todo =>
                    todo.id === action.id ? {...todo, done: !todo.done} : todo
                )
            };
        case REMOVE:
            return {
                ...state,
                // 선택된 todo의 id가 일치하는 것을 제외한 나머지를 리턴
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export default todos;
