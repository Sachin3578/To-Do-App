import React from "react";
import "./Home.css"

const Home = () => {
    return(
        <div className="home d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-center">Organize your<br />work and life, finally. </h1>
                <p>Become focused, organize and calm with <br /> todo app The world's #1 task manager app</p>
                <button className = "home-btn p-2">Make ToDo List</button>
            </div>
        </div>
    )
}

export default Home;