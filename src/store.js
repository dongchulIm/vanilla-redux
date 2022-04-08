import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

/* const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE"); */

/* const reducer=(state=[], action) => {
    switch(action.type){
        case addTodo.type:
            return [...state, {text: action.payload, id: Date.now()}]
        case deleteTodo.type:
            return state.filter(toDo=>toDo.id !== action.payload);
        default:
            return state;
    }
} */

// 위에 코드를 아래와 같이 줄일 수 있음
/* const reducer = createReducer([],
    {[addTodo] : (state, action) => {
        state.push({text: action.payload, id: Date.now()}); // push는 mutate
    },
    [deleteTodo]: (state,action) => 
    state.filter(toDo=>toDo.id !== action.payload)
    }ß
) */

const toDoList = createSlice({
    name: 'asd',
    initialState:[],
    reducers:{
        add: (state, action) => {
            state.push({text: action.payload, id: Date.now()}); // push는 mutate
        },
        remove : (state,action) => 
        state.filter(toDo=>toDo.id !== action.payload)
    }
})

console.log(toDoList.reducer);
const store = createStore(toDoList.reducer);
//const store = configureStore({reducer: toDoList.reducer});

export const {add, remove}= toDoList.actions;

export default store;