import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
    const toDos = useSelector(state => state);
    const id = useParams().id;
    console.log(toDos);

    const toDo = toDos.find(toDo=>toDo.id === parseInt(id))
    return (
        <>
        <h1>{toDo?.text}</h1>
        <h5>Created at: {toDo?.id}</h5>
        </>
    )  
}

function mapStateToProps(state){
    return {toDos: state};
}

export default connect(mapStateToProps)(Detail);