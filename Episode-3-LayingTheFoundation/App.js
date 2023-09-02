import React from "react";
import  ReactDOM  from "react-dom/client";

// How does the JS file executes the JSX code ?

// This heading2, is a react element.
const heading2 = (
    <h1 id="title" key='h2'>
        Hello, everyone I am namaste react 
    </h1>
) 

// React component
// 1.) Functional component
// 2.) class based component
// Functional component
const HeaderComponent = ()=>{
   return (
    <div>
      <h1>Namaste React functional component</h1>
      <h1>Hi everyone, Hope you all are doing good</h1>
    </div>
   );
}

const HeaderComponent2 = ()=>(
    <div>
       <h1>Namaste React functional component</h1>
       <h1>Hi everyone, Hope you all are doing good</h1>
  </div> 
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);


//1. component composition
//2. Sanitization