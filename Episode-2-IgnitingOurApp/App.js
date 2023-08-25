'use strict';
// Important points
//  why do we need packages ? :- we need lot of superpowers in our React app. React App cannot be a full-fledged production ready app by just using react. It needs lot of superpowers, i.e we need to minify it, we need to bundle it, we need to do chunking, we need to do tree-shaking and we need to do lot of things. so, for that we need packages, those packages will be installed to our project using npm, so we do npm install -D parcel so it installs parcel. Some package we need to install in our global environment and for that we will not use -D.
 
// Dependency :- Dependency means my project depends on lot of packages  

import React from "react";
import  ReactDOM  from "react-dom/client";

/**
 * HMR :- hot module replacement
 * File watcher algorithm
 */

const header1 = React.createElement("h1",{},"Namaste everyone");
const header2 = React.createElement("h2",{},"Hello, everyone");

const container = React.createElement(
    "div",
     {
       id:"container",
       hello: "world",
     }, 
    [header1, header2]
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);