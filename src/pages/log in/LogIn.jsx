import React, {
  useReducer,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import booksShlf from "../../assets/images/books2.jpg";
import appLogo from "../../assets/images/logo.png";
import { Card } from "../../components/card/Card";
import { Input } from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./login.scss";

// const initialState = { value: "", isValid: null };

// const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i;

// const emailReducer = (state, action) => {
//   switch (action.type) {
//     case "INPUT_CHANGE":
//       return {
//         value: action.payload,
//         isValid: emailRegex.test(action.payload),
//       };
//     case "INPUT_BLURRED":
//       return {
//         value: state.value,
//         isValid: emailRegex.test(state.value),
//       };
//     default:
//       return initialState;
//   }
// };

// const passwordReducer = (state, action) => {
//   switch (action.type) {
//     case "INPUT_CHANGE":
//       return {
//         value: action.payload,
//         isValid: action.payload.trim().length >= 6,
//       };
//     case "INPUT_BLURRED":
//       return {
//         value: state.value,
//         isValid: state.value.trim().length >= 6,
//       };
//     default:
//       return initialState;
//   }
// };

export const LogIn = () => {
//   const [formIsValid, setFormIsValid] = useState(false);
//   const [emailState, dispatchEmailState] = useReducer(
//     emailReducer,
//     initialState
//   );
//   const [passwordState, dispatchPasswordState] = useReducer(
//     passwordReducer,
//     initialState
//   );
//   const authCtx = useContext(AuthContext);
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();

//   useEffect(() => {
//     setFormIsValid(emailState.isValid && passwordState.isValid);
//   }, [emailState.isValid, passwordState.isValid]);

//   const handleChange = (type, value) => {
//     if (type === "email") {
//       dispatchEmailState({ type: "INPUT_CHANGE", payload: value });
//     } else if (type === "password") {
//       dispatchPasswordState({ type: "INPUT_CHANGE", payload: value });
//     }
//   };

//   const handleBlur = (type) => {
//     if (type === "email") {
//       dispatchEmailState({ type: "INPUT_BLURRED" });
//     } else if (type === "password") {
//       dispatchPasswordState({ type: "INPUT_BLURRED" });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (formIsValid) {
//       authCtx.onLogin(emailState.value, passwordState.value);
//     } else {
//       if (!emailState.isValid) {
//         emailInputRef.current.focus();
//         if (emailState.value === "") {
//           dispatchEmailState({ type: "INPUT_BLURRED" });
//         }
//       } else {
//         passwordInputRef.current.focus();
//         if (passwordState.value === "") {
//           dispatchPasswordState({ type: "INPUT_BLURRED" });
//         }
//       }
//     }
//   };

//   return (
//     <section className="login">
//       <Card className="login-wrapper">
//         <div className="inputs-wrapper">
//         <h3>
//           Please enter your email address and password to access your account
//         </h3>
//         <Input
//           inputId="email"
//           placeholder="Email address"
//           inputType="email"
//           ref={emailInputRef}
//           inputValue={emailState.value}
//           inputIsValid={emailState.isValid}
//           inputChangeHandler={(event) =>
//             handleChange("email", event.target.value)
//           }
//           inputBlurHandler={() => handleBlur("email")}
//         />
//         <Input
//           inputId="password"
//           placeholder="Password"
//           inputType="password"
//           ref={passwordInputRef}
//           inputValue={passwordState.value}
//           inputIsValid={passwordState.isValid}
//           inputChangeHandler={(event) =>
//             handleChange("password", event.target.value)
//           }
//           inputBlurHandler={() => handleBlur("password")}
//         />
//         <a href="#forget_password">Forget Password</a>
//         <Button className="submit-btn">Sign In</Button> <hr />
//         </div>
//         <div className="image-wrapper">
//         <img src={booksShlf} alt="booksimages" />
//         <div className="image-layer"></div>
//       </div>
//       </Card>
  
//     </section>
//   );

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();

  // validate email and password
  if (email.trim() === "") {
    setEmailError("This field is required");
  } else if (!isValidEmail(email)) {
    setEmailError("Please enter a valid email format");
  } else {
    setEmailError("");
  }

  if (password.trim() === "") {
    setPasswordError("This field is required");
  } else {
    setPasswordError("");
  }

  // if email and password are valid, redirect to books list page
  if (email.trim() !== "" && isValidEmail(email) && password.trim() !== "") {
    // redirect to books list page
    // replace the following line with your own code to redirect to the books list page
    console.log("Redirect to books list page");
  }
};

const handleChange = (event) => {
  const { name, value } = event.target;
  console.log(value);
  if (name === "email") {
    setEmail(value);
  } else if (name === "password") {
    setPassword(value);
  }
};

const isValidEmail = (email) => {
  // check if email is in a valid format using regular expression
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

return (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e)=>{handleChange(e)}}
      />
      {emailError && <span>{emailError}</span>}
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      {passwordError && <span>{passwordError}</span>}
    </div>
 
    <button type="submit">Login</button>
  </form>
);
};
