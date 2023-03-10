
// 액션 타입 선언

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 액션 생성함수 선언
let nextId = 1; //todo 데이터에서 사용할 고유 id
export const addTodo = text => ({
    type:ADD_TODO,
    todo:{
        id:nextId++, //새항목을 추가하고 nextId 값에 1을 더해주는것 
        text
    }
});

export const toggleTodo = id =>({
    type: TOGGLE_TODO,
    id
});

//초기 상태 선언
//리듀서의 초기 상태는 꼭 객체 타입일 필요 없다
// 배열이여도 되고 원시타입 (숫자,문자열,불리언 이여도 상관없다)
const initialState = [
    //객체를 이 배열 안에 넣으면 된다
    {
        id:1,
        text:'예시',
        done:false
    }
];

export default function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                todo => todo.id === action.id //id가 일치하면
                ?{...todo, done: !todo.done} //done값을 반전시키고
                : todo //아니라면 그대로 둠 
            ) 
        default:
            return state;
    }
}

//합쳐진 리듀서를 루트 리듀서 라고 부른다
//리듀서를 합치는 작업은 리덕스에 내장되어있는 combineReducers라는 함수를 사용한다
