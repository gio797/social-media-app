import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatibus beatae quod nam natus commodi quisquam, laborum quis
            atque? Asperiores, vero aliquid! Exercitationem, omnis.
          </p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" name="" id="Username" placeholder="Username" />
            <input type="email" name="" id="email" placeholder="Email" />
            <input
              type="password"
              name=""
              id="Password"
              placeholder="Password"
            />
            <input type="text" name="" id="name" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
