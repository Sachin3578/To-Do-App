import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup py-5">
      <div className="container">
        <div className="row shadow-lg rounded-4 overflow-hidden">
          <div className="col-lg-6 bg-primary text-white d-flex flex-column justify-content-center align-items-center p-5">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="text-center">Join us to manage your tasks easily.</p>
          </div>
          <div className="col-lg-6 bg-white p-5">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
