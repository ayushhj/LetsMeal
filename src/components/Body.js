import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
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
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(()=>{
      fetchData()
    },[]);

    const fetchData = async() =>{
    const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING")
    const json = await data.json();
    //console.log(json)
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

    if(listOfRestaurant?.length===0){
      return(
        <Shimmer/>
      )
    }
    
    return(
    <div className='' >
      <div className=' md:pt-4 md:px-2 justify-center md:pl-2 flex items-center mt-2 gap-2'>
        <div className='' >
          <input
          data-testid="searchInput"
          className="md:p-2 md:w-96 w-40 border rounded border-black md:me-2 hover:shadow-lg" type="text" placeholder="Search ..."
          value={searchText} 
          onChange={(e)=>{setSearchText(e.target.value)}}  ></input> 
          <button
          className="px-4 py-2 m-4 bg-orange-200 rounded-lg hover:shadow-lg"
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
        <div className="p-4 m-4 flex items-center" >
        <button className= "filter-btn px-4 py-2 m-4 rounded-lg bg-gray-100 hover:bg-orange-200" 
        onClick={()=>{
            const filteredList = listOfRestaurant.filter((restaurant)=>restaurant.info.avgRating > 4)
            //console.log(filteredList)
            setFilteredRestaurant(filteredList);
        }}
       >
            Top Rated Restaurants    
        </button>
        </div>
        
       
      </div>
      <div className='flex flex-wrap justify-center gap-3 p-2 mt-1 '>
        {filteredRestaurant.map((restaurant)=>(
          <Link to={"/restaurants/" + restaurant.info.id } key={restaurant.info.id} >
            {restaurant.info.avgRating > 4.5 ? (<RestaurantCardPromoted resData = {restaurant} />):
            (<RestaurantCard  resData = {restaurant}  />) }
        
        </Link>
        ))}
      </div>
  
    </div>
    )
  }

  export default Body;