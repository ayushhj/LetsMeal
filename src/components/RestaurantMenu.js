//import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
//import { MENU_API_URL } from "../../Utils/constants";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";
import { useState } from "react";


const RestaurantMenu = () =>{

const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);

const[showIndex , setShowIndex] = useState(0)


if(resInfo===null){
    return(<Shimmer/>)
}

const{name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

const catagories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
//console.log(catagories)
    return(
        <div className="Menu text-center " >
            <h1 className="font-bold my-6 text-2xl "  >{name}</h1> 
            <p className="font-bold text-lg"  >{cuisines.join(", ")} - {costForTwoMessage}</p>
            {catagories.map((catagory,index) =>(
            <RestaurantCatagory 
            key={catagory?.card?.card.title}  
            data={catagory?.card?.card}  
            showItems={index===showIndex?true:false}
            setShowIndex={()=>setShowIndex(index)}
             />))}
        </div>
    )

}

export default RestaurantMenu;