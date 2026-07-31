import { configureStore, createSlice   } from "@reduxjs/toolkit";

let state={
    likedCount:parseInt(localStorage.getItem("likedCount"))||1,
    imagesLiked:JSON.parse(localStorage.getItem("imagesLiked"))||[]
}

const likedSlice=createSlice({
    name:"liked",
    initialState:state,
    reducers:{
        incrementLike:(state,action)=>{
            state.likedCount+=1;
            localStorage.setItem("likedCount",state.likedCount.toString());
            state.imagesLiked.push(action.payload);
            localStorage.setItem("imagesLiked",JSON.stringify(state.imagesLiked));
            return state;
          },
        decrementLike:(state,action)=>{
            state.likedCount-=1;
            localStorage.setItem("likedCount",state.likedCount.toString())
            const arr=state.imagesLiked.filter((elem)=>{ if(action.payload!=elem){ return elem; }})
            localStorage.setItem("imagesLiked",JSON.stringify(arr));
            return state;
        }

    }
})
console.log(likedSlice)
const {decrementLike,incrementLike}=likedSlice.actions;
const likedReducer=likedSlice.reducer;


export const store = configureStore({
    reducer:{
         liked:likedReducer
    }
})


