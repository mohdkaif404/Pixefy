import React, { useRef, useState,useEffect } from 'react'
import { client } from '../constant';
function useFetchSingle(id,item) {
   const [imageData,setImageData]=useState(null);
   const [isloading,setLoading]=useState(true);
   const [error,setError]=useState(null);
   const timerId=useRef(undefined);
   useEffect(()=>{
        setLoading(true);
        if(item){ setLoading(false); setImageData(item); }
        else{
            timerId.current=setTimeout(()=>{
                client.photos.show({id})
                .then((val)=>{ setLoading(false); setImageData(val)})
                .catch((err)=>{  
                    setError('Error! Occured in single fetcher');
                }); 
            },300)
        }
      return ()=>{clearTimeout(timerId.current); }
    },[id]); 

    return {imageData,isloading,error};
































































































}

export default useFetchSingle