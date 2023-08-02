import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { currentUser, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatibus beatae quod nam natus commodi quisquam, laborum quis
            atque? Asperiores, vero aliquid! Exercitationem, omnis.
          </p>
          <span>Don't you have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" name="" id="Username" placeholder="Username" />
            <input
              type="password"
              name=""
              id="Password"
              placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
