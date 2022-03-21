import React from "react";
import "./Register.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { validate, res } from "react-email-validator";

function Register(props) {
  let history = useHistory();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState(0);
  var auth = JSON.parse(localStorage.getItem("user"));
  const handlnumber = () => {
    if (mobile.length < 1) {
      props.showAlert("Letters not allowed", "danger");
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    validate(email);
    if (res) {
      if (auth === null) {
        auth = [];
      }
      const same = auth.filter((value) => value.email === email);
      if (same.length === 0) {
        auth = [
          ...auth,
          {
            username: username,
            password: password,
            email: email,
            mobile_no: mobile,
          },
        ];
        localStorage.setItem("user", JSON.stringify(auth));
        props.showAlert("Account created successfully", "success");
        history.push("login");
      } else {
        props.showAlert("Email already exists", "danger");
      }
    } else {
      props.showAlert("Invalid Email ", "danger");
    }
    setusername("");
    setemail("");
    setpassword("");
    setmobile("");
  };
  return (
    <div className="register">
      <h1>Create an account</h1>
      <div className="">
        <label for="exampleFormControlInput1" className="form-label">
          username
        </label>
        <input
          onChange={(e) => setusername(e.target.value)}
          value={username}
          type="text"
          className="form-control "
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          className="form-control "
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Mobile No.
        </label>
        <input
          value={mobile}
          pattern="[0-9]*"
          onChange={(e) =>
            setmobile((v) => (e.target.validity.valid ? e.target.value : v))
          }
          onKeyUp={handlnumber}
          type="number"
          className="form-control "
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput2" className="form-label">
          Password
          <span className="span_text">(Length should be at least 5) </span>
        </label>
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          className="form-control "
          id="exampleFormControlInput2"
        />
      </div>
      <button
        className="btn btn-primary d-block"
        disabled={mobile.length < 10 || password.length < 5}
        onClick={handleClick}
      >
        Register
      </button>
      <h5 className="mt-4">Already user?</h5>
      <button className="btn btn-primary" onClick={() => history.push("login")}>
        Log in
      </button>
    </div>
  );
}

export default Register;
