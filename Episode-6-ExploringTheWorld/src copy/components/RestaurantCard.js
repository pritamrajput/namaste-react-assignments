import { IMG_CDN_URL } from "../Constant";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating})=>{
    // const {name, cloudinaryImageId, cuisines, avgRating} = restaurant.info;
    return(
        <div className="card">
            <img style={{width:"100%"}} src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3 className="cuisines">{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard;