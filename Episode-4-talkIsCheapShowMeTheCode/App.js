import React from "react";
import  ReactDOM  from "react-dom/client";

/**
      Header
       - Logo
       - List items(Right Side)
       - Cart
      Body
       - search bar
       - RestaurantList 
         - RestaurantCard
           - Image
           - Name
           - Rating
           - Cusines
      Footer
       - links
       - Copyright
    */


const Title = ()=>{
  return (
    <a href="/">
    <img alt="logo" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cr1FKMpu4aGeRLYadSrUJ51bSexJ4DhguDIuYeHivxSpsXEY4shbISVQXg3TKRe-I74&usqp=CAU"></img>
    </a>
  )
}


const HeaderComponent = ()=>{
   return (
    <div className="header">
      <Title/>
      <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
         </ul>
      </div>
    </div>
   );
}

const Body = ()=>{
  return(
    <h4>Body</h4>
  )
}

const Footer = ()=>{
  return (
    <h4>Footer</h4>
  )
}

 

const AppLayout = ()=>{
  return (
    <>
    <HeaderComponent/>
    <Body/>
    <Footer/>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);