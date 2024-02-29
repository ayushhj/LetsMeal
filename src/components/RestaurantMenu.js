//import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
//import { MENU_API_URL } from "../../Utils/constants";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";


const RestaurantMenu = () =>{

const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);


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
            {catagories.map((catagory)=>(<RestaurantCatagory data={catagory?.card?.card}   />))}
        </div>
    )

}

export default RestaurantMenu;