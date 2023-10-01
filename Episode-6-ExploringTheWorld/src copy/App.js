import React from "react";
import ReactDOM from "react-dom/client";
// import HeaderComponent from "./components/HeaderComponent.js";
import HeaderComponent from "./components/HeaderComponent.js";
import FooterComponent from "./components/Footer.js";
import BodyComponent from "./components/BodyComponent.js";
// import * as Obj from "./components/HeaderComponent";
// const header =  document.createElement("h1");
// header.innerHTML = "Hello world";
// const div = document.querySelector(".root")
// div.appendChild(header);


const subway = [{
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
    name: "Subway",
    cuisines: ['Healthy foods', 'Salads', 'Snacks'],
    rating: 4.2,
}]



const AppLayout = ()=>{
    return (
    <>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
    </>
    );
}



const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<AppLayout/>);