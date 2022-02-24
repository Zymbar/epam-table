import React from "react";
import "../styles/error.css";

export default function Error({message}){
    return (<div className="error">
        <h3>An unexpected error has occured:</h3>
        <p>{message}</p>
    </div>)
}