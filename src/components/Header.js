import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
const Header = () => {

const [btnName,setBtnName] = useState("Login")
const onlineStatus = useOnlineStatus();

    return (
      <div className='header'>
        <div className='logo-container'>
          <div>
          <img className='logo' src='https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760' />
          </div>
          </div>
          <div className='nav-items'>
            <ul>
              <li>Onile Status: {onlineStatus? "✅":"🔴"}</li>
              <li> <Link to="/" >Home</Link></li>
              <li><Link to="/about" >About Us</Link></li>
              <li><Link to="/contact" >Contact Us</Link></li>
              <li>Cart</li>
              <button className="login-btn" onClick={()=>{
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