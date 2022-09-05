import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode enabled!!", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled!!", "success");
    }
  };

  return (
    <div>
      <Navbar title="TextTools" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes>
          <Route path="AboutUs" element={<AboutUs mode={mode} />} />
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyse"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
