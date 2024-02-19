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
    <div className='res-card'>
      <img className='res-logo' alt="res-logo" src={IMG_CDN_URL+props.resData.info.cloudinaryImageId}/>
      <h3>{props.resData.info.name}</h3>
      <h4>{props.resData.info.cuisines.join(", ")}</h4>
      <h4>{props.resData.info.avgRating} Stars</h4>
      <h4>{props.resData.info.costForTwoString}</h4>
      <h4>{props.resData.info.lastMileTravelString}</h4>
  
    </div>
    )
  }

  export default RestaurantCard;