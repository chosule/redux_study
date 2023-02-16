
import { combineReducers } from "redux";
import counter from './counter'
import todos from './todos'

const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;


//이렇게 함으로써 리듀서가 합쳐졋다.

//그다음 스토어를 만들어야 한다! 
