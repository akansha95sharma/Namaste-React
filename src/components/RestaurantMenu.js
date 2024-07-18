import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { MENU_API } from "../utils/contants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
   // const [resInfo,setResInfo] = useState(null);
    //const [menuList, setMenuList] = useState(null);
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //    // console.log(json);
    //     setResInfo(json.data);
    //     console.log(resInfo);
        
    // };
    //console.log(resInfo?.cards[2]?.card?.card?.info);
    
    if (resInfo == null) return <Shimmer />
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    const itemCards = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    console.log(itemCards);
    return (
        <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(" , ")}</h3>
        <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
            {itemCards.map(item => (<li key={item.card.info.id}>{item.card.info.name} - {" "}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
            </ul>
        </div>
    )
}
//{itemCards.map(item => (<li key={item.card.info.id}>{item.card.info.name} - {" "} {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>))}
export default RestaurantMenu;