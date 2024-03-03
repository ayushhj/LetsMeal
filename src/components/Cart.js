import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart, removeItem } from "../../Utils/cartSlice"
import { IMG_CDN_URL } from "../../Utils/constants"


export const Cart =()=>{

    const cartItems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    const handleRemoveItem = (item)=>{
        //console.log(item)
        dispatch(removeItem(item))
    }

    return  (
        <div className="text-center m-4 y-4 "  >
            <h1 className="text-2xl font-bold"  >Cart</h1>
            <div className="w-6/12 m-auto"   >
              <button className="p-2 m-2 bg-black text-white hover:bg-slate-400" 
              onClick={handleClearCart}
              >
                Clear Cart
                </button>  
                {cartItems.length ===0 && (
                <div>
                <h1>Cart is Empty</h1>
                <button className="p-2 m-2 bg-black text-white "  > Add items to your cart!</button>
                </div>
                )
                }
                {/* From here item list */}
                <div>
        {cartItems.map((item)=> (
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
             <button className="absolute mx-10 my-8 p-1 m-1 bg-black text-white "
             
             onClick= { ()=>handleRemoveItem(item)}
             >Remove</button>
             </div>   
            <img className="rounded-lg" src={IMG_CDN_URL + item.card.info.imageId ? IMG_CDN_URL + item.card.info.imageId : ""} />
            </div>
            
            </div>
        ))}

    </div>
            </div>
        </div>
    )
}
