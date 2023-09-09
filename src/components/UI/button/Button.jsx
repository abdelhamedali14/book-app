import React from 'react'
import "./button.scss"
export default function Button(props) {
    const {bgColor,type ,color,onClick,disabled,children}=props
    return (
        <button
          type={type || 'button'}
          className={`button ${''}`}
          style={{color: color,backgroundColor:bgColor}}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    };  

