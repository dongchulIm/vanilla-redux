import { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import { useDispatch } from "react-redux";
import ToDo from "../components/ToDo";

function Home({toDos, addTodo}) {
    const [text, setText] = useState();
    const onChange= (e) => {
        setText(e.target.value)
    }
    const onSubmit= (e) => {
        console.log(`onSubmit!!`);
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text || ''} onChange={onChange} / >
                <button>Add</button>
            </form>
            <ul> 
                {toDos.map(function(toDo){
                    return <ToDo {...toDo} key={toDo.id}/>
                })}
            </ul>
        </>
    );
}

function mapStateToProps(state, ownProps){
    console.log("mapStateToProps?!!!");
    // state는 Redux store로부터 state를 받아옴
    // props는 component에 주어짐 react-router에 의해서
    //return {sexy: true}
    // 이 함수안에서 리턴되는건 무조건 component의 props에 추가됨
    // Redux state로부터 home(component)에 prop으로써 전달한다는 것
    return {toDos: state};
};

function mapDispatchToProps(dispatch, ownProps) {
    console.log("mapDispatchToProps");
    return {
        addTodo: (text) => {
            dispatch(add(text))
        }
    }
};

console.log("지나감!");

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// mapStateToProps()를 서서 state를 가져오고 싶음 컴포넌트 Home과 함께
// mapStateToProps() 함수를 이용해서 store로부터 state를 가져다 줄거임 Home에다가
// 첫번째 function은 store에 있는 state를 getState()를 통해 가져다가 컴포넌트에 전해줌

