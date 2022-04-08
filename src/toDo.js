import { type } from "@testing-library/user-event/dist/type";
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

//const toDos = [];

console.log("11");

// action creator
const addToDo = (text) =>{
  return {
      type:"ADD_TODO"
    , text:text
  }
}
// action creatro
const deleteToDo = (id) =>{
  return {
      type:"DELETE_TODO"
    , id:id
  }
}

// reducer 함수
const reducer = (state=[], action) => {
  console.log("reducer!");
  switch(action.type){
    case "ADD_TODO":
      return [...state, { text: action.text, id: Date.now()}];
      //return toDos.push(action.text); // state를 mutate 하지 말아야함
    case "DELETE_TODO":
      return state.filter(toDo=>{
        console.log("888"); 
        return toDo.id !== action.id; // state를 삭제하는 것이 아닌 삭제할 오브젝트를 제외시킨 새로운 array를 추가함, 새로운 state를 만든것임
      });
    default:
      return state;
  }
}

// store 생성 - data가 저장될 공간 생성
const store = createStore(reducer);

store.subscribe(()=> {console.log("555");paintToDos();});

// 삭제 버튼 눌렀을 때
const dispatchDeleteTodo = e => {
  console.log("777");
  store.dispatch(deleteToDo(parseInt(e.target.parentNode.id))); // Action(reducer에게 action을 보냄)
}

// 생성 버튼 눌렀을 때
const dispatchAddTodo = (text) =>{
  console.log("444");
  store.dispatch(addToDo(text)); // Action(reducer에게 action을 보냄)
}


const paintToDos = () => {
  console.log("666");
  const toDos = store.getState();
  ul.innerHTML=""
  toDos.forEach((data,index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText="DEL";
    btn.addEventListener("click", dispatchDeleteTodo); // 삭제 이벤트 생성
    li.id = data.id
    li.innerText = data.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
  
};

// submit 이벤트 발생시 
const onSubmit = (e) =>{
  e.preventDefault();
  const toDo = input.value;
  input.value="";
  // action
  console.log("333");
  dispatchAddTodo(toDo);
} 

//form 태그에 submit 태그 생성
form.addEventListener("submit", onSubmit);




// Vanilla Js
/* const input = document.querySelector("input");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

const toDos = [];

const creatToDo = (toDo) =>{
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
}

const onSubmit = (e) =>{
  e.preventDefault();
  const toDo = input.value;
  input.value="";
  creatToDo(toDo);
} 

form.addEventListener("submit", onSubmit); */
