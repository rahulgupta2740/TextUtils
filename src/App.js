import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";
import React, { useState } from "react";
import {
Routes,
Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("white");
  const toggleMode = () => {
    if (mode === "white") {
      setMode("dark");
      document.body.style.backgroundColor = "#0c0f4b87";
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      
        <Navbar
          title="TextUtils"
          title2="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container">
          <Routes>
            
            <Route path="/about" element ={<About/>}>
             
            </Route>
            <Route path="/" element={ <Textform Headings="About Your Self" />}>
             
            </Route>
          </Routes>
        </div>
      </>
    
  );
}

export default App;
