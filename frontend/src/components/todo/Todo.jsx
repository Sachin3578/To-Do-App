import React, { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from 'react-toastify';

const Todo = () => {
    const [Inputs, setInputs] = useState({title: "", body: ""});
    const [Array, setArray] = useState([])
    const show = () => {
            document.getElementById("textarea").style.display="block";
    }
    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]:value});
    }
    const submit = () => {
        // console.log(Inputs);
        if(Inputs.title==="" || Inputs.body === ""){
            toast("Title or Body Should Not Be Empty")
        }else{
            setArray([...Array, Inputs])
            setInputs({title: " ", body: ""});
            toast.success("Your Task Is Added Successfully!")
            toast.error("Your Task is not saved Please SignIn !")
        }

    }
    const del = (id) => {
        Array.splice(id,"1");
        setArray([...Array]);
        toast.success("Task Is deleted")
    }
    return(
        <div className="todo">
            <ToastContainer/>
            <div className="todo-main container d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column w-50">
                    <input 
                        type="text" 
                        placeholder="TITLE" 
                        name="title"
                        className="my-2  p-2 todo-inputs"
                        value={Inputs.title}
                        onClick={show}
                        onChange={change}/>
                    <textarea
                        id="textarea" 
                        type="text" 
                        name="body"
                        placeholder="Body" 
                        className="p-2 todo-inputs"
                        value={Inputs.body}
                        onChange={change}
                        />

                    <div className="w-50 display-flex justify-content-end">
                        <button className="home-btn my-3 px-2 py-1" onClick={submit}>Add</button>
                    </div>
                    
                </div>
                
            </div>

            <div className="todo-body">
                <div className="container-fluid">
                    <div className="row">
                        {Array && Array.map((items, index) => (
                            <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                                    <TodoCards title={items.title} body={items.body} id= {index} delid = {del}/>
                            </div>
                    ))}
                    </div>
                
            </div>
            </div>
        </div>
    )
}

export default Todo;