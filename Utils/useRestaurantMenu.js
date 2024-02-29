import { useEffect, useState } from "react"
import { MENU_API_URL } from "./constants";



const useRestaurantMenu = (resId) =>{
const[resInfo,setResInfo] = useState(null)


useEffect(() => {

    fetchMenu();

},[])

const fetchMenu = async() =>{
 const data = await fetch(MENU_API_URL+resId)
 const json = await data.json();
 setResInfo(json.data)
 //console.log(json)
 //console.log(json.data.cards[0].card.card.info.name)
 
};
    return resInfo;

};

export default useRestaurantMenu;