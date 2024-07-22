import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { MENU_API } from "../utils/contants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
//import { UserContext } from "../utils/UserContext";
const RestaurantMenu = () => {
   // const [resInfo,setResInfo] = useState(null);
    //const [menuList, setMenuList] = useState(null);
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    //console.log(resInfo);
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
    console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    const categories = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c=> c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    return (
        <div className="menu text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
            {cuisines.join(" , ")}
        </p>
          {categories.map((category,index)=>(
            /**This is a controlled components */
            <RestaurantCategory data={category.card.card} key={category.card.card.title} showItems = {index == showIndex ? true : false} setShowIndex={()=>setShowIndex(index)}/>
          ))}
        </div>
    )
}
//{itemCards.map(item => (<li key={item.card.info.id}>{item.card.info.name} - {" "} {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>))}
export default RestaurantMenu;