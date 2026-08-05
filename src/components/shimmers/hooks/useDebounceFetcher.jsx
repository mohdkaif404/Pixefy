import {createClient} from 'pexels'
import { useEffect, useRef, useState } from 'react';
import { apiKey } from '../../../constant';


export function useDebounceFetcher(param,setimagejson,client,filter,setLoading){
    const timerId=useRef(undefined);

    // fetching all the required data 
    useEffect(()=>{
        if(!param) return;
        
        let query=param;
        clearTimeout(timerId.current);
        timerId.current=setTimeout(() => {

            client.photos.search({ query, per_page: 40,...filter }).then(photos => {  setimagejson(photos); setLoading?.((val)=> !val); console.log()});
           
        }, 300);
        
        return ()=>{ clearTimeout(timerId); }
    },[param,filter]);
    return;
}
