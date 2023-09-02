import React from "react";
import  ReactDOM  from "react-dom/client";
// 1. "Hello world" with HTML
// 2. "Hello world" with javascript
// 3. "Hello world" with React

const header1 = React.createElement("h1",{key:"1"},"Namaste everyone");
const header2 = React.createElement("h2",{key:"2"},"Hello, everyone");

const container = React.createElement("div",{id:"container",key:"3"}, [header1, header2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);