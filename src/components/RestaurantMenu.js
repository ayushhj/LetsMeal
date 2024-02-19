import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../../Utils/constants";


const RestaurantMenu = () =>{

const[resInfo , setResInfo] = useState(null)

const {resId} = useParams();

useEffect(() => {

    fetchMenu();

},[])

const fetchMenu = async() =>{
 const data = await fetch(MENU_API_URL+resId)
 const json = await data.json();
 setResInfo(json.data)
 //console.log(json.data.cards[0].card.card.info.name)
};

if(resInfo===null){
    return(<Shimmer/>)
}

const{name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//console.log(itemCards)


    return(
        <div className="Menu" >
            <h1>{name}</h1> 
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>{
                itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100 }Rs. </li>) 
                )
                }
            </ul>

        </div>
    )

}

export default RestaurantMenu;