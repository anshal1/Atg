import React from "react";
import "./SignUp.css";
const Login = (props) => {
  return (
    <>
      <div className={props.toggle}>
        <div id="wrapper">
          <div className="heading">
            <p>Create Account</p>
            <i
              className="fa-solid fa-xmark"
              id="desktop_cross"
              onClick={(e) => {
                props.Close();
                e.target.id = "hide";
              }}
            ></i>
            <i className="fa-solid fa-xmark" onClick={props.Close}></i>
          </div>
          <div className="inputs">
            <div className="name">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="login_btn">
            <button>Create Account</button>
            <p onClick={props.ShowLogin}>or, Sign In</p>
          </div>
          <div className="other_Signup_methods">
            <button>
              <span>
                <i className="fa-brands fa-facebook"></i>{" "}
              </span>{" "}
              Sign up with Facebook
            </button>
            <button>
              <span>
                <i className="fa-brands fa-google"></i>{" "}
              </span>{" "}
              Sign up with Google
            </button>
          </div>
          <div className="terms_and_policy">
            <p>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
        <div className="SignUpimg">
          <p className="already_have_account"onClick={props.ShowLogin}>
            Already have an account? <span style={{color: "blue"}}>Sign In</span>
          </p>
          <div className="image_container">
            <p>Image Here</p>
          </div>
          <p className="terms">
          By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
