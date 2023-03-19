import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const varifyPassword = () => {
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      return true;
    }
    return false;
  };

  const handleSignup = () => {
    if (!varifyPassword()) {
      return false;
    }
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        // account created succssfully
        alert("Account created successfully");
      })
      .catch((error) => {
        alert(
          "Account Not created\nCheck your email id again\nMinimum required length for password: 6"
        );
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Signup</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 m-auto py-2">
            <input
              ref={emailRef}
              type="text"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="col-12"></div>
          <div className="col-md-6 m-auto py-2">
            <input
              ref={passwordRef}
              type="text"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="col-12"></div>
          <div className="col-md-6 m-auto py-2">
            <input
              ref={confirmPasswordRef}
              type="text"
              className="form-control"
              placeholder="Confirm password"
              required
            />
          </div>
          <div className="col-12"></div>
          <div className="col-md-6 m-auto py-2">
            <button
              onClick={handleSignup}
              className="btn btn-secondary w-100 my-2"
            >
              Signup as {localStorage.getItem("who")}
            </button>
            <button className="btn btn-secondary w-100 my-2">
              Go back to previous page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
