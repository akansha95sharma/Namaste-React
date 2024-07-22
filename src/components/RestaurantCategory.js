import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({...categoryData}) => {
    //const [showItems, setShowItems] = useState(false);
   //console.log(showItems);
    const handleClick = () => {
        //setShowItems(!showItems);
        console.log("Clicked");
      //  console.log(categoryData.setShowIndex());
      categoryData.setShowIndex();
    }
    //console.log(categoryData)
    return (<div>
        {/**Header */}
        <div className="w-6/12 mx-auto m-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{categoryData.data.title} ({categoryData.data.itemCards.length})</span>
            <span>&#8964;</span>
        </div>
            {categoryData.showItems && <ItemList data={categoryData.data.itemCards}/>}
        </div>
        {/**Accordence Body */}  
    </div>
    
    );
}
export default RestaurantCategory;