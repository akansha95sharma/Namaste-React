import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/contants";

const ItemList = (items) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // Dispatch an action
        //console.log(addItem(item));
        dispatch(addItems(item));
    }
    console.log(items);
    return <div>
        <ul>
        {items.data.map((item) => (
            <div data-testid= "fooditems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>- ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div>
                <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                </div>
                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg w-20" onClick={() => handleAddItem(item)}>Add +</button>
                </div>
            </div>) )}
        </ul>
    </div>
}

export default ItemList;