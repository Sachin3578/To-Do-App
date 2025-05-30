import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const TodoCards = ({title, body, id, delid}) =>{
    return(
        <div className="todo-card p-3">
            <div>
                <h6>{title}</h6>
                <p className="todo-card-p">
                    {body.split("",77)}...
                </p>
            </div>
            <div className="d-flex justify-content-around" onClick={() => {
                delid(id);
            }}>
                <div className="card-icon-head"><FaEdit className="card-icon card-icon-head" />Update</div>
                <div className="card-icon-head"><RiDeleteBin6Fill  className="card-icon del card-icon-head"/>Delete </div>
            </div>
        </div>
    )
}

export default TodoCards;