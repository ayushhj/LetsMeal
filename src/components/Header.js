import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {


//subscribing to the store using selector
const cartItems = useSelector((store)=>store.cart.items);
//console.log(cartItems)

const [btnName,setBtnName] = useState("Login")
const onlineStatus = useOnlineStatus();

    return (
      <div className='flex justify-between bg-orange-200 shadow-lg '>
        <div className='logo-container'>
          <div>
          <img className='w-20' src='https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760' />
          </div>
          </div>
          <div className='flex items-center'>
            <ul className="flex" >
              <li className="px-4"  >Online Status: {onlineStatus? "✅":"🔴"}</li>
              <li className="px-4" > <Link to="/" >Home</Link></li>
              <li className="px-4" ><Link to="/about" >About Us</Link></li>
              <li className="px-4" ><Link to="/contact" >Contact Us</Link></li>
              <li className="px-4" >Cart ({cartItems.length})</li>
              <button  className=" px-4 login-btn" onClick={()=>{
                if(btnName=="Login"){
                setBtnName("logout")}
                else{
                  setBtnName("Login")
                }

              }} >{btnName}</button>
            </ul>
  
          </div>
  
      </div>
    )
  }

  export default Header;