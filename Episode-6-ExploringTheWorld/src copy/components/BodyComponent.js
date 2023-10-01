import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constant";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer.js";

const BodyComponent = ()=>{
    // let searchText = "KFC";
    const [searchText, setSearchText] = useState("KFC");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    

    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0105397&lng=72.5147019&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const jsonData =  await data.json();

      setAllRestaurants(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(()=>{
       getRestaurants();
    },[]);

    return (allRestaurants.length === 0)?<Shimmer/>:(
    <>
    <div className="search-containeer">
        <input 
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        />
        <button type="submit"
        onClick={()=>{
            const filterData = allRestaurants.filter((restaurant)=>{
                return restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRestaurants(filterData);
        }}
        >
        Submit
        </button>
    </div>
    <div className="restaurantCard">
    {/* <RestaurantCard id="firstComponent" key="124" restaurant = {restaurantList[0]}/>
    <RestaurantCard id="firstComponent" key="124" restaurant = {restaurantList[1]}/>
    <RestaurantCard id="firstComponent" key="124" restaurant = {restaurantList[2]}/>
    <RestaurantCard id="firstComponent" key="124" restaurant = {restaurantList[3]}/> */}
    {
        (filteredRestaurants.length === 0) ? <h1>No restaurant match your filter</h1>:(filteredRestaurants.map((restaurant)=>{
       return <RestaurantCard id="firstComponent" key={restaurant.info.id} {...restaurant.info}/>;
     }))
     }

    
    </div>
    </>
    );

}

export default BodyComponent;