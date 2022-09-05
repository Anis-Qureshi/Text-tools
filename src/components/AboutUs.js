import React, { useState, } from "react";

export default function AboutUs(props) {
  // const [darkStyle, setdarkStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
    
  // });
//  const [btntext , setBtnText] = useState('Enable Dark Mode')

//   const toggleDarkMode = () => {
//     if (darkStyle.color === "black") {
//       setdarkStyle({
//         color: "white",
//         backgroundColor: "black",
//         border : '.5px solid white'
//       });
//       setBtnText('Enable Light Mode')
//     }
//     else{
//         setdarkStyle({ 
//             color: "black",
//             backgroundColor: "white"
//           });
//           setBtnText('Enable Dark Mode') 
//     }
//   };

  return (
    <div className="container my-4" style = {{backgroundColor : props.mode === "dark" ? "#343a40" : "white" ,
    color : props.mode === "dark" ? "white" : "#343a40"
    }} >
        <h2 my-4>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style = {{backgroundColor : props.mode === "dark" ? "#343a40" : "white" ,
              color : props.mode === "dark" ? "white" : "#343a40"
              }} 
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor : props.mode === "dark" ? "#343a40" : "white" ,
          color : props.mode === "dark" ? "white" : "#343a40"
          }} >
              -------------------------------------------------
              -------------------------------------------------
              -------------------------------------------------
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style = {{backgroundColor : props.mode === "dark" ? "#343a40" : "white" ,
              color : props.mode === "dark" ? "white" : "#343a40"
              }} 
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor : props.mode === "dark" ? "#343a40" : "white" ,
          color : props.mode === "dark" ? "white" : "#343a40"
          }} >
             -------------------------------------------------
              -------------------------------------------------
              -------------------------------------------------
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style = {{backgroundColor : props.mode === "dark" ? "#343a40" : "white" ,
          color : props.mode === "dark" ? "white" : "#343a40"
          }} 
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor : props.mode === "dark" ? "#343a40" : "white" ,
          color : props.mode === "dark" ? "white" : "#343a40"
          }} >
              -------------------------------------------------
              -------------------------------------------------
              -------------------------------------------------
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-primary my-3" onClick={ () => toggleDarkMode()}>
        {btntext}
      </button> */}
    </div>
  );
}
