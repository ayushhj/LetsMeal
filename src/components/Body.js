import RestaurantCard from "./RestaurantCard";
//import {restaurantList} from "../../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";

// Navigation to fetch details json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.name
const Body=()=>{

    const[listOfRestaurant , setListOfRestaurant] = useState([])
    const[searchText , setSearchText] = useState("")
    const[filteredRestaurant,setFilteredRestaurant] = useState([])

    useEffect(()=>{
      fetchData()
    },[]);

    const fetchData = async() =>{
    const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json)
    //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRestaurant((json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants))
    };

    const onlineStatus = useOnlineStatus()
    if(onlineStatus===false){
      return(
        <h1>Looks like you are offline , Please check your internet connection</h1>
      )
    }

    if(listOfRestaurant.length===0){
      return(
        <Shimmer/>
      )
    }
    
    return(
    <div className='body' >
      <div className='filter'>
        <div className='search' >
          <input type="text" 
          className="search-box"
          value={searchText} 
          onChange={(e)=>{setSearchText(e.target.value)}}  ></input> 
          <button
          onClick={()=>{
            const filteredRestaurant = listOfRestaurant.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())

            )
            setFilteredRestaurant(filteredRestaurant)
            //console.log(searchText)
          }}
          >
            Search</button>

        </div>
        <button className= "filter-btn" 
        onClick={()=>{
            const filteredList = listOfRestaurant.filter((restaurant)=>restaurant.info.avgRating > 4)
            //console.log(filteredList)
            setFilteredRestaurant(filteredList);
        }}
       >
            Top Rated Restaurants    
        </button>
      </div>
      <div className='res-container'>
        {filteredRestaurant.map((restaurant)=>(
          <Link to={"/restaurants/" + restaurant.info.id } >
        <RestaurantCard key={restaurant.info.id} resData = {restaurant}  />
        </Link>
        ))}
      </div>
  
    </div>
    )
  }

  export default Body;