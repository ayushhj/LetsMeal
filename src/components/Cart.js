




import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../Utils/constants";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  selectTotalPrice,
} from "../../Utils/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector(selectTotalPrice);
  const discount = (totalPrice * 0.2) / 100;
  const deliveryFee = (totalPrice * 0.04) / 100;
  const totalAmt = totalPrice / 100 + deliveryFee - discount;

  const removeItem = (id) => dispatch(removeFromCart({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="md:mx-28 mt-1 md:mt-6 flex md:gap-10 flex-col lg:flex-row ">
          <div className="lg:w-3/4 cart-scroll">
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <div
                    className="flex my-5 m-2 items-center gap-2 md:gap-3"
                    key={item?.item?.card?.ifno?.id}
                  >
                    <div className="w-[18%] ">
                      <img
                        src={IMG_CDN_URL + item?.item?.card?.info?.imageId}
                        className="rounded-md"
                        alt="menu"
                      />
                    </div>

                    <div className="w-[60%] md:w-[52%] ">
                      <p className="text-base md:mb-2">
                        {item?.item?.card?.info?.name}
                      </p>
                      <div className="flex text-gray-600 items-center mx-auto">
                        ₹{" "}
                        {item?.item?.card?.info?.price
                          ? item?.item?.card?.info?.price / 100
                          : item?.item?.card?.info?.defaultPrice / 100}
                      </div>
                    </div>

                    <div className="flex gap-2 w-[23%] md:w-[30%]  flex-col md:flex-row items-center">
                      <div className="border-green-200 rounded shadow mx-auto text-xs md:text-base">
                        <button
                          className="text-lg px-2 hover:text-green-700 "
                          onClick={() =>
                            decreaseQuantity(item?.item?.card?.info?.id)
                          }
                        >
                          -
                        </button>
                        <span className="px-1 md:px-2 font-medium text-green-700">
                          {item.quantity}
                        </span>
                        <button
                          className="font-medium px-2 text-green-700"
                          onClick={() =>
                            increaseQuantity(item?.item?.card?.info?.id)
                          }
                        >
                          +
                        </button>
                      </div>

                      <div
                        onClick={() => removeItem(item?.item?.card?.info?.id)}
                        className="hidden text-sm md:flex transition-all hover:text-red-600 cursor-pointer p-2 rounded my-auto"
                      >
                        <FaXmark />
                      </div>

                      <div
                        // onClick={() => dispatch(removeCartItem(item))}
                        onClick={() => removeItem(item?.item?.card?.info?.id)}
                        className="md:hidden transition-all w-18 text-red-600 cursor-pointer rounded my-auto px-1 shadow text-sm"
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="basis-4/12 h-fit sticky top-28 p-6 rounded-md border shadow-2xl my-8 md:m-0 mx-2">
            <h2 className="text-xl border-b pb-4">Bill Details</h2>

            {/* order details */}
            <div className="py-4 space-y-4 border-b">
              <div className="flex justify-between items-center">
                <p className="font-normal">Price ({cartItems.length} items)</p>
                <p>₹ {totalPrice / 100}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-normal">Discount (20%)</p>
                <p> - ₹ {parseFloat(discount).toFixed(0)}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-normal">Delivery Fee (4%)</p>
                <p>+ ₹ {parseFloat(deliveryFee).toFixed(0)}</p>
              </div>

              <p className="text-sm my-2 text-green-500">
                Savings of ₹{parseFloat(discount).toFixed(0)}
              </p>
            </div>

            <div className="py-4 border-b">
              <div className="flex justify-between items-center">
                <h1>Total Amount</h1>
                <h1 className="">₹ {parseFloat(totalAmt).toFixed(0)}</h1>
              </div>
            </div>

            <button
              className="w-full block mt-4 text-lg bg-green-100 text-black hover:text-white hover:bg-green-600 text-center p-4 rounded-md hover:shadow-md"
              onClick={() => alert("Order Successful!")}
            >
              Checkout
            </button>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <button className="bg-green-100 p-2 text-black hover:bg-green-600 hover:shadow-md hover:text-white transition-all shadow text-sm md:text-base rounded">
                <Link to="/">Continue Ordering</Link>
              </button>

              <button
                className="bg-red-100 p-2 text-black hover:bg-red-600 hover:shadow-md hover:text-white transition-all shadow text-sm md:text-base rounded"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" py-10 flex items-center justify-center flex-col gap-4 container-max">
          <img
            src={"https://shidory.com/assets/images/empty_cart.webp"}
            className="md:w-[30%]"
            alt="cart"
          />
          <p className="text-xl font-bold text-green-700">Your Cart is Empty</p>
          <button className="hover:shadow-xl capitalize transition-all p-2 px-4 bg-green-700 rounded w-[fit-content] text-white text-sm font-bold">
            <Link to="/">See Restaurants Near You!</Link>
          </button>
        </div>
      )}
    </>
  );
};
//export default Cart;























// import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { clearCart, removeItem } from "../../Utils/cartSlice";
// import { IMG_CDN_URL } from "../../Utils/constants";
// import { addItem } from "../../Utils/cartSlice";

// export const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);

//   const dispatch = useDispatch();
//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   const handleAddItem = (item)=>{
//     dispatch(addItem(item))
// }

//   const handleRemoveItem = (item) => {
//     //console.log(item)
//     dispatch(removeItem(item));
//   };

//   return (
//     <div className="text-center m-4 y-4 ">
//       <h1 className="text-2xl font-bold">Cart</h1>
//       <div className="w-6/12 m-auto">
//         <button
//           className="p-2 m-2 bg-black text-white hover:bg-slate-400"
//           onClick={handleClearCart}
//         >
//           Clear Cart
//         </button>
//         {cartItems.length === 0 && (
//           <div>
//             <h1>Cart is Empty</h1>
//             <button className="p-2 m-2 bg-black text-white ">
//               {" "}
//               Add items to your cart!
//             </button>
//           </div>
//         )}
//         {/* From here item list */}
//         <div>
//           {cartItems.map((item) => (
//             <div
//               key={item.card.info.id}
//               className="p-2 m-2 border-gray-200 border-b-2 text-left  flex justify-between"
//             >
//               <div className="w-9/12">
//                 <div className="py-2">
//                   <span className="font-bold">{item.card.info.name}</span>
//                   <span>
//                     {" "}
//                     - ₹
//                     {item.card.info.price
//                       ? item.card.info.price / 100
//                       : item.card.info.defaultPrice / 100}
//                   </span>
//                 </div>
//                 <p className="text-xs  text-gray-400">
//                   {" "}
//                   {item.card.info.description}
//                 </p>
//               </div>
//               <div className=" w-3/12 p-4 ">
//                 <div className="absolute">
//                   <button
//                     className="p-2 mx-10 my-14 rounded-xl bg-white text-green-500 shadow-md hover:bg-slate-400"
//                     onClick={() => handleAddItem(item)}
//                   >
//                     {" "}
//                     Add +
//                   </button>
//                   <button
//                     className="absolute mx-10 my-8 p-1 m-1 bg-black text-white "
//                     onClick={() => handleRemoveItem(item)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//                 <img
//                   className="rounded-lg"
//                   src={
//                     IMG_CDN_URL + item.card.info.imageId
//                       ? IMG_CDN_URL + item.card.info.imageId
//                       : ""
//                   }
//                 />
//               </div>
//             </div>
            
//           ))}


//         </div>
//       </div>
//     </div>
//   );
// };
