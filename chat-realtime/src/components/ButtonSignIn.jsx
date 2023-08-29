import { auth } from "../services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function ButtonSignIn() {

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .catch((error) => {
        console.log("Caught error Popup closed");
      })
  };

  return (
    <div className="google-btn" onClick={googleSignIn}>
      <div className="google-icon-wrapper">
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="sign in"/>
      </div>
      <p className="btn-text"><b>Sign in with google</b></p>
    </div>
  )
};

export default ButtonSignIn;
