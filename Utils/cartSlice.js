
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push({
        item: action.payload,
        quantity: 1,
      });

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem?.item?.card?.info?.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;

      const itemToIncrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToDecrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const selectTotalPrice = ({ cart }) => {
  return cart?.items.reduce((total, cartItem) => {
    return total + cartItem.item.card.info.price * cartItem.quantity;
  }, 0);
};

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;























// import { createSlice } from "@reduxjs/toolkit";



// const cartSlice = createSlice({
//     name:"cart",
//     initialState:{
//         items:[],
//     },
//     reducers:{
//         addItem:(state,action)=>{
//             state.items.push(action.payload);
//         },
//         removeItem:(state,action)=>{
//             let newState = [];
//             const itemToRemove = action.payload
//             let isDeleted = false
//             for(i=0;i<state.items.length;i++){
//                 if(state.items[i].card.info.id === itemToRemove.card.info.id){
//                     if(!isDeleted){
//                         isDeleted = true;

//                     }
//                     else{
//                         newState.push(state.items[i])

//                     }

//                 }
//                 else{
//                     newState.push(state.items[i])
//                 }
                
//             }
//             state.items = newState 
//         },
//         clearCart:(state,action)=>{
//             state.items.length =0;
//         }

//     }
// }) ;

// export const{addItem,removeItem,clearCart } = cartSlice.actions

// export default cartSlice.reducer;