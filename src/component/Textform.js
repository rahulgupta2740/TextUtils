import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("")
  // const [btntext, setbtntext] = useState("Dark Mode")
  // const [myStyle,setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })

  // const toggleStyle = () => {

  //   if(myStyle.color === 'black'){

  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     })

  //     setbtntext("Light Mode")
  //     console.log(myStyle);

  //   }else{

  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white' 
  //     })

  //     setbtntext("Dark Mode")

  //   }
  // };
  const Upper = () => {
    console.log("enter here " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const Lower = () => {
    console.log("enter here " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const Clear = () => {
    console.log("enter here " + text);
    let newtext = "";
    setText(newtext);
  };
  
  const firstCapital =()=> {
    console.log("enter here " + text);
    let newtext = text.charAt(0).toUpperCase();
    let newtext1 = text.slice(1,text.length);
    setText(newtext+newtext1);
  };
  const Reverse =()=> {
    console.log("enter here " + text);
    let newtext ="";
    for(let i=text.length-1;i>=0;i--){
     newtext += text.charAt(i);
    }
    setText(newtext);
  };
  const change = (event) => {
    setText(event.target.value);
  };
  
  return (
    <>
    <div className="container my-3">
      <div className="container">
        <h1>{props.Headings}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={change}
            value={text}
          ></textarea>
        </div>
        <button type="button" onClick={Upper} className="btn btn-primary mx-2">
          UpperCase
        </button>
        <button type="button" onClick={Lower} className="btn btn-danger mx-2">
          LowerCase
        </button>
        <button type="button" onClick={Clear} className="btn btn-warning mx-2">
          Clear
        </button>
        <button type="button" onClick={firstCapital} className="btn btn-success mx-2">
        First Capital
        </button>
        <button type="button" onClick={Reverse} className="btn btn-info mx-2">
        Reverse
        </button>
        {/* <button type="button" onClick={toggleStyle} className="btn btn-dark mx-2">{btntext}</button> */}
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
       {
          text === "" ? <p>0 Words 0 Characters</p> : <p>{text.split(" ").length} Words and {text.length} Characters</p>
       }
        <p>{0.008 * text.split(" ").length} Time to Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      </div>
    </>
  );
}
