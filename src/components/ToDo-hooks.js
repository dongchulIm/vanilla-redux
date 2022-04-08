import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store";

function ToDo({text, id, delTodo}){
    const dispatch = useDispatch();

    const test = () => {
        dispatch(actionCreators.deleteTodo(id));
    }

    return (
    <li>
        {text}<button onClick={test}>DEL</button>
    </li>
    );
}

export default ToDo;
