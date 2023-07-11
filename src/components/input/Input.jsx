import React, { useRef, useImperativeHandle, useState } from "react";
import "./input.scss"

// export const Input = React.forwardRef((props) => {


// return (

// );
// });

export default function Input(props) {
    const { id, label, type, placeholder, value, handleChange, error } = props;
  
    return (
      <div>
        <label htmlFor={id}>{label}:</label>
        {type === "password" ? (
          <input type="password" id={id} value={value} onChange={handleChange} placeholder={placeholder} />
        ) : (
          <input type="text" id={id} value={value} onChange={handleChange} />
        )}
        {error && <span>{error}</span>}
      </div>
    );
  }



//   const [visiblePassword, setVisiblePassword] = useState(false);
//   const inputRef = useRef();

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   useImperativeHandle(ref, () => {
//     return { focus: focusInput };
//   });

//   const togglePasswordVisibility = () => {
//     setVisiblePassword((prev) => {
//       return !prev;
//     });
//   };

//   return (
//     <>
//     <div
//   className={`input-wrapper ${
//     props.inputIsValid === false ? "invalid" : ""
//   }`}
// >
//   <input
//     ref={inputRef}
//     type={
//       props.inputType !== "password"
//         ? props.inputType
//         : visiblePassword
//         ? "text"
//         : "password"
//     }
//     id={props.inputId}
//     placeholder={props.placeholder}
//     value={props.inputValue}
//     onChange={props.inputChangeHandler}
//     onBlur={props.inputBlurHandler}
//     className={props.inputIsValid === false ? "invalid" : ""}
//   />
//   {/* if input of type password add show button */}
//   {props.inputType === "password" && (
//     <button
//       type="button"
//       className="show-btn"
//       onClick={togglePasswordVisibility}
//     >
//       Show
//     </button>
//   )}
// </div>
//       {/* ERROR MESSAGE */}
//       {
//        <div className="error-message">
//          <p
//           className={`invalid ${
//             props.inputIsValid === false ? "show" : ""
//           }`}
//         >
//           {props.inputType !== "password"
//             ? `Email is ${
//                 props.inputValue === "" ? "required" : "invalid"
//               }`
//             : `${
//                 props.inputValue === ""
//                   ? "password is required"
//                   : "password must be at least 6 characters"
//               }`}
//         </p>
//        </div>
//       }
//     </>
//   );