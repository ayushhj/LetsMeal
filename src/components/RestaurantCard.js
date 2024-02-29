import { IMG_CDN_URL } from "../../Utils/constants"
const RestaurantCard = (props) =>{
    console.log(props)
// const{resData} = {props}
// console.log(props)
// const{ cloudinaryImageId,
//     name,
//     cuisines,
//     lastMileTravelString,
//     costForTwoString,
//     avgRating} = resData?.data


    return(
    <div className='res-card m-4 p-4 w-[200px] bg-[#f0f0f0] rounded-lg hover:bg-gray-200' >
      <img className='res-logo rounded-lg '  alt="res-logo" src={IMG_CDN_URL+props.resData.info.cloudinaryImageId}/>
      <h3 className="font-bold py-4 text-lg" >{props.resData.info.name}</h3>
      <h4>{props.resData.info.cuisines.join(", ")}</h4>
      <h4>{props.resData.info.avgRating} Stars</h4>
      <h4>{props.resData.info.costForTwoString}</h4>
      <h4>{props.resData.info.sla.deliveryTime} Mins</h4>
      <h4>{props.resData.info.sla.lastMileTravelString}</h4>
      <h4>{props.resData.info.areaName}</h4>
  
    </div>
    )
  };



  //HOC
  // Input RestaurantCard  ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-gray-500 text-white m-2 p-2 rounded-lg" >Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}


  export default RestaurantCard;