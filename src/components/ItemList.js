import { IMG_CDN_URL } from "../../Utils/constants";

const ItemList = ({items}) =>{
console.log(items)

    return (
    <div>
        {items.map((item)=> (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left  flex justify-between" > 
            <div>
            <div className="py-2"> 
            <span>{item.card.info.name}</span> 
            <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
             </div>
            <p className="text-xs" > {item.card.info.description}</p>
            </div>
            <div className=" w-36 p-4 ">
            <img className="" src={IMG_CDN_URL + item.card.info.imageId ? IMG_CDN_URL + item.card.info.imageId : ""} />
            </div>
            
            </div>
        ))}

    </div>
    )
}

export default ItemList;