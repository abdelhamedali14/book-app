import React from 'react'
import "./button.scss"
export default function Button(props) {
    return (
        <button
          type={props.type || 'button'}
          className={`button ${props.className}`}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.children}
        </button>
      );
    };  

