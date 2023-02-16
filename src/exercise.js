import{ createStore} from 'redux';
//스토어를 만들어주는 함수

//리덕스에서 관리 할 상태 정의
const initialState = {
    counter:0,
    text:'',
    list:[]
};

//액션타입 정의
const INCREASE = 'INCREASE';
const DECREASE  = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';


// * 액션 생성 함수
// - type 필드를 필수적으로 가지고 있어야 한다.
//const 함수명 = () =>{   
//  return {
//      액션 을 쓰면된다. 
//      파라미터를 받아와서 액션 객체 형태로 만들어 준다.
    //}
//}
const increase = () =>({
    type:INCREASE
})

const decrease = () =>({
    type : DECREASE
})
 
const changeText = (text) =>({    
    type:CHANGE_TEXT,
    text //액션안에는 type외에 추가적인 필드를 마음대로 넣을수 있다.    
})

const addToDolist = item =>({
    type:ADD_TO_LIST,
    item
})


// * 리듀서 만들기
// 리듀서는 
// - 변화를 일으키는 함수
// - 현재의 상태와 전달 받은 액션을 참고해 
// - 새로운 상태를 만들어서 반환 (state, action)
// - 리듀서에서는 꼭 불변성을 지켜야한다 !!

function reducer (state = initialState , action){
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                counter: state.increase + 1
            };
        case DECREASE:
            return{
                ...state,
                counter:state.decrease -1
            };
        case CHANGE_TEXT:
            return{
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return{
                ...state,
                list: state.list.concat(action.item)
            };
            default:
                return state;
    }
}


// * store 만들기
const store = createStore(reducer);

// - 리덕스는 1개에 애플리케이션에 하나의 스토어를 만든다.
// - store안에는 현재의 앱 상태와 리듀서가 들어있고 추가적으로 몇가지 내장 함수가 들어있다.

console.log('겟스타트',store.getState());

//store안에 들어있는 사태가 바뀔 때 마다 호출되는 listener함수
const listener = () =>{
    const state = store.getState();
    console.log('스테이트',state);
};

// 구독을 해제하고 싶을 때는 unsubscribe()를 호출하면 된다.
const unsubscribe = store.subscribe(listener);


// 이제 액션들을 디스패치
// - 스토어의 내장함수 중 하나
// - 액션을 발생시키는 것이라고 이해
// - dispatch는 액션을 파라미터로 전달 
// - 에시) dispatch(action)

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToDolist({ id : 1, text:'와우'}));




