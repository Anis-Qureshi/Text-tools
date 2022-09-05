import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    setText("");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(document.getElementById("myBox").value);
    props.showAlert('Copied to Clipboard!!!' , 'success')
    
  };

  const [text, setText] = useState("Enter your text here:");

  return (
    <>
      <div className="container" style = {{backgroundColor : props.mode === "dark" ? "#343a40" : "white" ,
          color : props.mode === "dark" ? "white" : "#343a40"
          }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor : props.mode === "dark" ? "#343a40" : "white" ,
          color : props.mode === "dark" ? "white" : "#343a40"
          }}
            id="myBox"
            rows="8"
            
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary " onClick={handleCopy}>
          Copy to clipboard
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleClear}>
          Clear all
        </button>
        <button className="btn btn-primary " onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3"style = {{backgroundColor : props.mode === "dark" ? "#343a40" : "white" ,
          color : props.mode === "dark" ? "white" : "#343a40"
          }} >
        <h2>Your text summary here: </h2>
        <p>
          {" "}
          {text.split(" ").length } words, {text.length} characters and{" "}
          {text.split(/\r\n|\r|\n/).length} lines.
        </p>
        <p>
          {" "}
          you can read your paragraph in {0.008 * text.split(" ").length}{" "}
          minutes.{" "}
        </p>
      </div>
    </>
  );
}
