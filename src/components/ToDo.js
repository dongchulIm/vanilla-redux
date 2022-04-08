import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo1({text, id, delTodo}){
    return (
    <li>
        <Link to={`/${id}`}>
            {text}
        </Link>
        <button onClick={delTodo}>DEL</button>
    </li>
    );
}

//export default ToDo;


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        delTodo: () => {
            dispatch(remove(ownProps.id))
        }
    }
}

export default connect(null, mapDispatchToProps)(ToDo1);