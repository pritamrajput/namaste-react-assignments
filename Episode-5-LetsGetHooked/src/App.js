import React from "react";
import  ReactDOM  from "react-dom/client";
// import Header from "./component/Header";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

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





// Note :- In real world data does not come like the below data, it comes as the array of objects
// const burgerKing = {
//   img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
//   name:"Subway",
//   cuisines:["Burgers"," American"],
//   Ratings:"4.2 ",
// }

// Below is the example of data as array of objects
const burgerKing = [{
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
    name:"Subway",
    cuisines:["Burgers"," American"],
    Ratings:"4.2 ",
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
    name:"Subway",
    cuisines:["Burgers"," American"],
    Ratings:"4.2 ",
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
    name:"Subway",
    cuisines:["Burgers"," American"],
    Ratings:"4.2 ",
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
    name:"Subway",
    cuisines:["Burgers"," American"],
    Ratings:"4.2 ",
  }]

 

  // 1. receiving with just props
  // const RestaurantCard = (props) => {
  
  //   return(
  //     <div className="card">
  //       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restaurant.info.cloudinaryImageId}/>
  //       <h2>{props.restaurant.info?.name}</h2>
  //       <h3 className="cuisines">{props.restaurant.info?.cuisines.join(", ")}</h3>
  //       <h4>{props.restaurant.info?.avgRating} Stars</h4>
  //     </div>
  //   )
  // }

// 2. receiving the props and destructuring on receiving
// const RestaurantCard = ({restaurant}) => {
  
//   return(
//     <div className="card">
//       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.info.cloudinaryImageId}/>
//       <h2>{restaurant.info?.name}</h2>
//       <h3 className="cuisines">{restaurant.info?.cuisines.join(", ")}</h3>
//       <h4>{restaurant.info?.avgRating} Stars</h4>
//     </div>
//   )
// }


// 3. destructuring the restaurant after receiving
// const RestaurantCard = ({restaurant}) => {
//   const {name, cloudinaryImageId, cuisines,avgRating } = restaurant.info;
//   return(
//     <div className="card">
//       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
//       <h2>{name}</h2>
//       <h3 className="cuisines">{cuisines.join(", ")}</h3>
//       <h4>{avgRating} Stars</h4>
//     </div>
//   )
// }


// 4. Destructuring the restaurant on the fly on receiving as parameter
// const RestaurantCard = ({name, cloudinaryImageId, cuisines,avgRating }) => {
//   return(
//     <div className="card">
//       <img src={IMG_CDN_URL + cloudinaryImageId}/>
//       <h2>{name}</h2>
//       <h3 className="cuisines">{cuisines.join(", ")}</h3>
//       <h4>{avgRating} Stars</h4>
//     </div>
//   )
// }





 

const AppLayout = ()=>{
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);