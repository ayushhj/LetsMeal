import { useDispatch } from "react-redux";
import { addItem } from "../../Utils/cartSlice";
import { IMG_CDN_URL } from "../../Utils/constants";

const ItemList = ({items}) =>{
//console.log(items)
const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }

    return (
    <div>
        {items.map((item)=> (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left  flex justify-between" > 
            <div className="w-9/12" >
            <div className="py-2"> 
            <span className="font-bold" >{item.card.info.name}</span> 
            <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
             </div>
            <p className="text-xs  text-gray-400" > {item.card.info.description}</p>
            </div>
            <div className=" w-3/12 p-4 ">
             <div className="absolute" > 
             <button className="p-2 mx-10 my-14 rounded-xl bg-white text-green-500 shadow-md hover:bg-slate-400" 
             onClick={()=>handleAddItem(item)}
             > Add +</button>
             </div>   
            <img className="rounded-lg" src={IMG_CDN_URL + item.card.info.imageId ? IMG_CDN_URL + item.card.info.imageId : ""} />
            </div>
            
            </div>
        ))}

    </div>
    )
}

export default ItemList;