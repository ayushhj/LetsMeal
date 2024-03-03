import { IMG_CDN_URL } from "../../Utils/constants";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  return (
    <div className="md:w-72 md:px-4 md:pb-2 mt-2 rounded hover:shadow-lg">
      <div className="h-full w-full object-cover">
        <img
          className="rounded-2xl "
          src={IMG_CDN_URL+props.resData.info.cloudinaryImageId}
          alt="image"
        />
      </div>

      <h2 className="text-xl font-semibold text-gray-800 md:mt-1 md:pt-1 ml-2">
        {props.resData.info.name}
      </h2>
      <p className="text-gray-800 text-sm ml-2">
        {props.resData.info.cuisines && props.resData.info.cuisines.join(", ")}
      </p>
      <div className="flex justify-between text-sm md:mt-2 md:pt-2 mx-2 mt-1 pb-1">
        <div
          className={`flex items-center gap-2 md:font-semibold text-sm px-1 rounded w-fit  ${
            props.resData.info.avgRating >= 4
              ? " bg-slate-200 text-green-600 "
              : " bg-orange-200 text-red-600"
          }`}
        >
          <FaStar />
          <p>{props.resData.info.avgRating}</p>
        </div>
        <span className=" text-gray-700">
          {props.resData.info.sla.lastMileTravelString?? "1.9 km"}
        </span>
        <span className=" text-gray-700">{props.resData.info.costForTwoString?? "₹350 for two"}</span>
      </div>
    </div>
  );
};

//export default RestaurantCard;







// import { IMG_CDN_URL } from "../../Utils/constants"
// const RestaurantCard = (props) =>{
//     //console.log(props)
// // const{resData} = {props}
// // console.log(props)
// // const{ cloudinaryImageId,
// //     name,
// //     cuisines,
// //     lastMileTravelString,
// //     costForTwoString,
// //     avgRating} = resData?.data


//     return(
//     <div className='res-card m-4 p-4 w-[200px] bg-[#f0f0f0] rounded-lg hover:bg-gray-200' >
//       <img className='res-logo rounded-lg '  alt="res-logo" src={IMG_CDN_URL+props.resData.info.cloudinaryImageId}/>
//       <h3 className="font-bold py-4 text-lg" >{props.resData.info.name}</h3>
//       <h4>{props.resData.info.cuisines.join(", ")}</h4>
//       <h4>{props.resData.info.avgRating} Stars</h4>
//       <h4>{props.resData.info.costForTwoString}</h4>
//       <h4>{props.resData.info.sla.deliveryTime} Mins</h4>
//       <h4>{props.resData.info.sla.lastMileTravelString}</h4>
//       <h4>{props.resData.info.areaName}</h4>
  
//     </div>
//     )
//   };



  //HOC
  // Input RestaurantCard  ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-gray-400 text-white m-2 p-2 " >Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}


  export default RestaurantCard;