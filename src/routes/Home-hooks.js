import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { useDispatch } from "react-redux";



function Home() {
    const dispatch = useDispatch();
    const [text, setText] = useState();
    const onChange= (e) => {
        setText(e.target.value)
    }
    const onSubmit= (e) => {
        e.preventDefault();
        setText("");
        dispatch(actionCreators.addTodo(text)); // connect대신에 useDispatch 사용할때!! 이게 더 유용
        //addTodo(text);

    }
    
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} / >
                <button>Add</button>
            </form>
        </>
    );
}

export default Home;

