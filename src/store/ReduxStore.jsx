import { configureStore, createSlice   } from "@reduxjs/toolkit";

let state={
    imagesLiked:JSON.parse(localStorage.getItem("imagesLiked"))||[]
}

const likedSlice=createSlice({
    name:"likeds",
    initialState:state,
    reducers:{
        incrementLike:(state,action)=>{
            
            state.imagesLiked.push(action.payload);
            localStorage.setItem("imagesLiked",JSON.stringify(state.imagesLiked));
            return state;
          },
        decrementLike:(state,action)=>{
            
            const arr=state.imagesLiked.filter((elem)=>{ if(action.payload.id!=elem.id){ return elem; }});
            state.imagesLiked=arr;
            localStorage.setItem("imagesLiked",JSON.stringify(arr));
            return state;
        }

    }
})
console.log(likedSlice)
export const {decrementLike,incrementLike}=likedSlice.actions;
const likedReducer=likedSlice.reducer;


export const store = configureStore({
    reducer:{
         liked:likedReducer
    }
})


