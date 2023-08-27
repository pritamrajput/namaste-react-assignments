'use strict';
// Important points
//  why do we need packages ? :- we need lot of superpowers in our React app. React App cannot be a full-fledged production ready app by just using react. It needs lot of superpowers, i.e we need to minify it, we need to bundle it, we need to do chunking, we need to do tree-shaking and we need to do lot of things. so, for that we need packages, those packages will be installed to our project using npm, so we do npm install -D parcel so it installs parcel. Some package we need to install in our global environment and for that we will not use -D.
 
// Dependency :- Dependency means my project depends on lot of packages  

// Parcel-cache ? :- 

// Dist folder :- It keeps the file minified for us

import React from "react";
import  ReactDOM  from "react-dom/client";

// Parcel is a beast because it does the following things :-
/**
 * HMR :- hot module replacement
 * File watcher algorithm :- Algorithm for the file watching is written in c++ because its very fast. It just keep    track of all the files which are chaging in the real time and tells the server to reload.
 * Minify
 * BUNDLING
 * cleaning our code
 * Parcel manages all the development and production differences
 * superfast build algoritm.
 * Parcel do image optimisation as well :- it will do image optimization of the images which are present in our project and it does not do optimization of the images coming from backend.
 * caching while development
 * compression
 * compatible with older version of browser
 * Add polyfills
 * Parcel gives us the functionality that we can build our App on https (HTTPS on development machine). we can do npx parcel index.html --https to run our app on https. why https ? :- because somethings runs only on https.
 * zero config
 * 
 * 
 * 
 * Transitive dependencies
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