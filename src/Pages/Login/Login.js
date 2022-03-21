import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { set_user } from "../../redux/actions/MovieAction";
import { useHistory } from "react-router-dom";
import { validate, res } from "react-email-validator";
function Login(props) {
  let history = useHistory();
  const [user, setuser] = useState([]);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [flag, setflag] = useState(false);
  var user_info = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("LogedInUser")) === null) {
      setuser({});
      setflag(false);
    } else {
      setuser(JSON.parse(localStorage.getItem("LogedInUser")));
      setflag(true);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    setuser({});
    localStorage.removeItem("LogedInUser");
    setflag(false);
    dispatch(set_user([]));
    props.showAlert("Logout  successful", "success");
  };
  var login_user = [];
  const handleClick = (e) => {
    e.preventDefault();
    validate(email);
    if (res) {
      var same = user_info.filter((value) => {
        return value.email === email && value.password === password;
      });
      if (same.length === 0) {
        props.showAlert("Invalid Credentials", "danger");
      } else {
        login_user = [
          {
            username: same[0].username,
            email: same[0].email,
            mobile_no: same[0].mobile_no,
          },
        ];
        localStorage.setItem("LogedInUser", JSON.stringify(login_user));
        setuser(login_user);

        setflag(true);
        dispatch(set_user(JSON.stringify(login_user)));
        props.showAlert("login successful", "success");
      }
    } else {
      alert("wrong email");
    }
    setemail("");
    setpassword("");
  };
  return !flag ? (
    <div className="login">
      <h1 className="">Login into yout account</h1>
      <form>
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
          <label for="exampleFormControlInput2" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            className="form-control "
            id="exampleFormControlInput2"
          />
        </div>

        <button className="btn btn-primary" onClick={handleClick}>
          Log in
        </button>
        <h5 className="mt-4">New user?</h5>
        <button
          className="btn btn-primary d-block "
          onClick={() => history.push("register")}
        >
          Register
        </button>
      </form>
    </div>
  ) : (
    <div className="card bg-secondary mt-5">
      <div className="card-header text-dark">Profile Info</div>
      <div className="card-body">
        <h5 className="card-title text-dark">
          User Email:<span className="text-white">{user[0].email}</span>
        </h5>
        <h5 className="card-title text-dark">
          UserName:<span className="text-white">{user[0].username}</span>
        </h5>
        <h5 className="card-title text-dark">
          Mobile No.<span className="text-white">{user[0].mobile_no}</span>
        </h5>

        <div className="mt-4">
          <button onClick={handleLogout} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
