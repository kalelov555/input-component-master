import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";
import styled from "styled-components";


export default function Input(props) {
    
    return (
        <div>
            <label>{props.label}</label>

            <input 
            className="input" 
            placeholder={props.value}
            >
            </input>
            <p>{props.helperText}</p>

        </div>
    )
}


Input.propTypes = {
    color: PropTypes.oneOf(["default", "error"]),
    label: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    helperText: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    multiline: PropTypes.bool,
    row: PropTypes.string,
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
}


// Default props 
Input.defaultProps = {
    color: "default",
    label: "Label",
    size: "md",
    helperText: "",
    value: "Placeholder",
    disabled: false,
    error: false,
    fullWidth: false,
    multiline: false,
    row: "1",
    startIcon: "",
    endIcon: "",
}


