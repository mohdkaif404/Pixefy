 import React, { useState , useEffect } from 'react'
import { useSelector } from 'react-redux';

 function useIsLiked(imageData) {
     const [liked,setLiked]=useState(false); 
     const likedArray=useSelector((state)=>{ return state.liked.imagesLiked; });
     useEffect(()=>{
       if(!imageData) return; 
             likedArray.forEach(element => {
               
                if(element.id==imageData.id){ setLiked(true); }
             });
    },[imageData])

    return {liked,setLiked}; 
 }
 
 export default useIsLiked