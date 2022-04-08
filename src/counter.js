import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
// VanillaJS - Redux
const reducer = (count=0, aciton ) => {
  switch(aciton.type){
    case "ADD":
      return count+1;
    case "MINUS":
      return count-1;
    default:
      return count;
  }
}
const store = createStore(reducer);

add.addEventListener("click", () => store.dispatch({type:"ADD"}));
minus.addEventListener("click", () => store.dispatch({type:"MINUS"}));

store.subscribe(() => number.innerText = store.getState());


// VanillaJS로 구현
/* let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

const handleAdd = () => {
  count+=1;
  updateText();
}

const handleMinus = () => {
  count-=1;
  updateText();
}

add.addEventListener("click",handleAdd);
minus.addEventListener("click", handleMinus);
 */