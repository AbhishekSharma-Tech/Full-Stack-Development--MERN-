import React from "react"
import "../styles/Button.css";

export const Button = ({color, label, funCall}) => {
    const btnColor = `btn btn-${color}`;
    return (
        <button onClick={funCall} className={btnColor}>{label}</button>
    );
}