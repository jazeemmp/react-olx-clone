import React, { useContext } from "react";
import "./Signup.css";
import Google from "../../assets/Google";
import { signInWithPopup } from "firebase/auth";
import { auth,googleProvider} from "../../config/firebase";
import { PopupContext } from "../../Contexts/SignupContext";
import { UserContext } from "../../Contexts/UserContext";

const Signup = () => {

  const { signupPopup, setSignupPopup } = useContext(PopupContext);
  const {signInWithGoogle} = useContext(UserContext)
  if (!signupPopup) {
    return null;
  }

  const handleClose = () => {
    setSignupPopup(false);
  };
  return (
    <>
      <div className="signup-container">
        <div className="signup">
          <div className="top">
            <div onClick={handleClose} className="close">
              <i className="fa-solid fa-x" />
            </div>
            <img src="../.././images/loginEntryPointPost.webp" alt="" />
            <p>Help us become one of the safest places to buy and sell</p>
          </div>
          <div className="middle">
            <div className="phone-login">
              <i className="fa-solid fa-mobile-screen-button" />
              <p>Continue with phone</p>
            </div>
            <div onClick={signInWithGoogle} className="google-login">
              Sign in with Google
              <Google />
            </div>
            <div className="email-login">
              <h4>OR</h4>
              <p>Login wth Email</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
