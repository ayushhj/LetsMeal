import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            let newState = [];
            const itemToRemove = action.payload
            let isDeleted = false
            for(i=0;i<state.items.length;i++){
                if(state.items[i].card.info.id === itemToRemove.card.info.id){
                    if(!isDeleted){
                        isDeleted = true;

                    }
                    else{
                        newState.push(state.items[i])

                    }

                }
                else{
                    newState.push(state.items[i])
                }
                
            }
            state.items = newState 
        },
        clearCart:(state,action)=>{
            state.items.length =0;
        }

    }
}) ;

export const{addItem,removeItem,clearCart } = cartSlice.actions

export default cartSlice.reducer;