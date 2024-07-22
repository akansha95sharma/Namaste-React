import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {UserContext} from "../utils/UserContext";
//import UserContext from "../utils/UserContext";

const Body = () =>{
    //Local State Variable - Super powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.405317814950596&lng=76.95039633661509&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
           // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(listOfRestaurants);
    }
        //Normal JS Variable
    // let listOfRestaurantsJS = [
    //     {
    //         "info": {
    //             "id": "222662",
    //             "name": "KFC",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/a929110e-bc63-4ddb-8132-7c3f037ea5c9_222662.JPG",
    //             "locality": "Iris Broadway",
    //             "areaName": "Sector 85",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "Burgers",
    //                 "Fast Food",
    //                 "Rolls & Wraps"
    //             ],
    //             "avgRating": 4,
    //             "parentId": "547",
    //             "avgRatingString": "4.0",
    //             "totalRatingsString": "1K+",
    //             "sla": {
    //                 "deliveryTime": 22,
    //                 "lastMileTravel": 0.6,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "20-25 mins",
    //                 "lastMileTravelString": "0.6 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-07-13 23:59:00",
    //                 "opened": true
    //             },
    //             "badges": {},
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {},
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "loyaltyDiscoverPresentationInfo": {
    //                 "logoCtx": {
    //                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
    //                 },
    //                 "freedelMessage": "FREE DELIVERY",
    //                 "badgeType": "BADGE_TYPE_ONE_LITE"
    //             },
    //             "orderabilityCommunication": {
    //                 "title": {},
    //                 "subTitle": {},
    //                 "message": {},
    //                 "customIcon": {}
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {},
    //             "externalRatings": {
    //                 "aggregatedRating": {
    //                     "rating": "--"
    //                 }
    //             },
    //             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         },
    //         "analytics": {
    //             "context": "seo-data-9d9a379a-6a15-4bbf-82e7-1af74a0e0e79"
    //         },
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/kfc-iris-broadway-sector-85-gurgaon-222662",
    //             "text": "RESTAURANT_MENU",
    //             "type": "WEBLINK"
    //         },
    //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    //     },
    //     {
    //         "info": {
    //             "id": "454345",
    //             "name": "Domino's Pizza",
    //             "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    //             "locality": "Iris Broadway",
    //             "areaName": "Sector 85",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "Pizzas",
    //                 "Italian",
    //                 "Pastas",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.4,
    //             "parentId": "2456",
    //             "avgRatingString": "4.4",
    //             "totalRatingsString": "1K+",
    //             "sla": {
    //                 "deliveryTime": 25,
    //                 "lastMileTravel": 0.6,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "20-25 mins",
    //                 "lastMileTravelString": "0.6 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-07-13 23:59:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "Rxawards/_CATEGORY-Pizza.png",
    //                         "description": "Delivery!"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Delivery!",
    //                                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹100 OFF",
    //                 "subHeader": "ABOVE ₹199",
    //                 "discountTag": "FLAT DEAL"
    //             },
    //             "loyaltyDiscoverPresentationInfo": {
    //                 "logoCtx": {
    //                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
    //                 },
    //                 "freedelMessage": "FREE DELIVERY",
    //                 "badgeType": "BADGE_TYPE_ONE_LITE"
    //             },
    //             "orderabilityCommunication": {
    //                 "title": {},
    //                 "subTitle": {},
    //                 "message": {},
    //                 "customIcon": {}
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {},
    //             "externalRatings": {
    //                 "aggregatedRating": {
    //                     "rating": "--"
    //                 }
    //             },
    //             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         },
    //         "analytics": {
    //             "context": "seo-data-9d9a379a-6a15-4bbf-82e7-1af74a0e0e79"
    //         },
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/dominos-pizza-iris-broadway-sector-85-gurgaon-454345",
    //             "text": "RESTAURANT_MENU",
    //             "type": "WEBLINK"
    //         },
    //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    //     }
    // ];
    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false)
    return(<h1>Looks Like Your Internet Is Not Working!!!</h1>);
   // Conditional Reandering
   //console.log(listOfRestaurants);
   const {loggedInUser,setUserName} = useContext(UserContext);
    return listOfRestaurants.length === 0 ? ( <Shimmer /> ): (
        <div className="body">
            <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {setSearchText(e.target.value);}}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    /// filter the restraunt cards and update the UI
                    // search text
                    const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                const fiterListOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4
                );
                setListOfRestaurants(fiterListOfRestaurants);
            console.log(listOfRestaurants)
            }}>Top Rated Restaurants</button></div>
            <div className="search m-4 p-4 flex items-center">
                <label>UserName :</label>
                <input className="border border-black p-2 mx-2" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} />
            </div>
            </div>
            <div className="flex flex-wrap">
            {
                filteredRestaurant.map((restro) => (<Link key={restro.info.id} to={"/restaurants/"+ restro.info.id}>
                {/** if the restaurant is promoted then add a promoted label to it */
                    restro.info.promoted ? (<RestaurantCardPromoted resData={restro} />):(<RestaurantCard resData={restro} />)
                }
                </Link>))
            }
            </div>
        </div>
    );
};
export default Body;