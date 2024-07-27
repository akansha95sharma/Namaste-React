//import { useContext } from "react";
import { CDN_URL } from "../utils/contants";
import {UserContext} from "../utils/UserContext";

const styleCard = {
    backgroundColor : "#f0f0f0"
}

// Tailwind is very light weight
const RestaurantCard = (props) => {
    const {resData} = props;
    //console.log(resData);
   //  const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);
    const {cloudinaryImageId,name,cuisines,avgRatingString,sla} = resData?.info;
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src= { CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{sla.slaString}</h4>
            
        </div>
    );
};
// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-2 m-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};
export default RestaurantCard;