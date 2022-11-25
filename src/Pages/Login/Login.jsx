import React from "react";
import "../SignUp/SignUp.css";
const Login = (props) => {
  return (
    <>
      <div className={props.toggle}>
        <div id="wrapper">
          <div className="heading">
            <p>Sign In</p>
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
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="login_btn">
            <button style={{width: "100%"}}>Sign In</button>
            <p onClick={props.ShowLogin}>or, Sign In</p>
          </div>
            <br />
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
            <p style={{fontSize: "12px", fontWeight: "500"}}>Forgot Password?</p>
          </div>
          <div className="terms_and_policy">
            <p>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
        <div className="SignUpimg">
          <p className="already_have_account" onClick={props.ShowSignUp}>
          Don’t have an account yet?{" "}
            <span style={{ color: "blue" }}> Create new for free!</span>
          </p>
          <div className="image_container">
            <p>Image Here</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
