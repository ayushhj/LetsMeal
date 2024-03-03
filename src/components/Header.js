//import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/LetsMeal Logo.png"
import { FaShoppingCart } from "react-icons/fa";
//import useOnlineStatus from "../../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {


//subscribing to the store using selector
const cartItems = useSelector((store)=>store.cart.items);
//console.log(cartItems)

//const [btnName,setBtnName] = useState("Login")
//const onlineStatus = useOnlineStatus();

    return (
      <div className='flex bg-white justify-between sticky top-0 z-50 md:h-20 h-14 shadow-lg md:px-16'>
        <div className=''>
          <div>
          <img className='md:w-40 w-30 ' src={logo} />
          </div>
          </div>
          <div className='flex items-center'>
            <ul className="flex justify-center align-middle gap-3 md:mx-4 md:py-6 text-gray-600 md:text-base pt-4" >
              {/* <li className="px-4"  >Online Status: {onlineStatus? "✅":"🔴"}</li> */}
              <li className="md:mx-6 hover:text-orange-500 md:pt-1" > <Link to="/" >Home</Link></li>
              <li className="md:mx-6 md:pt-1 hover:text-orange-500" ><Link to="/about" >About Us</Link></li>
              <li className="md:mx-6 md:pt-1 hover:text-orange-500" ><Link to="/contact" >Contact Us</Link></li>
              <li className="hover:text-orange-500 pr-1" > <Link className="flex md:mx-6 md:pt-1 items-center w-fit md:py-1 hover:text-orange-500" to="/Cart" ><FaShoppingCart />
              <div className="text-orange-500">({cartItems.length})</div>
              </Link> </li>
              

              {/* <button  className=" px-4 login-btn" onClick={()=>{
                if(btnName=="Login"){
                setBtnName("logout")}
                else{
                  setBtnName("Login")
                }

              }} >{btnName}</button> */}
            </ul>
  
          </div>
  
      </div>
    )
  }

  export default Header;