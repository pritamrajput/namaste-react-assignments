import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

// One way data binding 
// --- we have searchText  = "KFC" so if we put the searchText variable inside the value attribute of the input field than it will show the value as "KFC" on the page in the input field but if we change try to change the input field value to something different than it will not affect the searchText variable value and it value will remain as "KFC" only. This is known as one-way data binding. 

function filterData(searchInput, restaurants){
  const filterData =  restaurants.filter((restaurant)=>restaurant.info.name.includes(searchInput)
  );

  return filterData;
}

const Body = ()=>{
  // let searchText = "KFC";

  // useState() hook, searchText is a local variable
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState("KFC");
    return(
    <>
      <div className="search-container"> 
        <input 
          type="text" 
          className="search-input" 
          placeholder="search" 
          value={searchInput}
          onChange={(e)=>{setSearchInput(e.target.value)}}
        />
        <button 
        className="search-btn"
        onClick={()=>{
          const data = filterData(searchInput,restaurants);
          setRestaurants(data);

        }}
        >
        Search
        </button>
      </div>


      <div className="restaurabt-list">
        {/* <RestaurantCard {...restaurantList[0].info} />
        <RestaurantCard {...restaurantList[1].info}/>
        <RestaurantCard {...restaurantList[2].info}/>
        <RestaurantCard {...restaurantList[3].info}/>
        <RestaurantCard {...restaurantList[4].info}/>
        <RestaurantCard {...restaurantList[5].info}/>
        <RestaurantCard {...restaurantList[6].info}/>
        <RestaurantCard {...restaurantList[7].info}/>
        <RestaurantCard {...restaurantList[8].info}/>
        <RestaurantCard {...restaurantList[9].info}/> */}
        {/* <RestaurantCard restaurant = {restaurantList[9]}/> */}
  
        {/*using map to loop*/
        restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant.info}/>
          })
        }
      </div>
      </>
    )
  }

  export default Body;