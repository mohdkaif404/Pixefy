import {createClient} from 'pexels'
import { useEffect, useRef, useState } from 'react';
const apiKey='rIq1qVLsxVgPM33XzNmn8YcJAsk2hNPkVMh9xJp8LfjHmvkmyLEOZMaF';


export function useDebounceFetcher(param,setimagejson,client,filter){
    const timerId=useRef(undefined);

    // fetching all the required data 
    
    useEffect(()=>{
        if(!param) return;
        
        let query=param;
        clearTimeout(timerId.current);
        timerId.current=setTimeout(() => {

            client.photos.search({ query, per_page: 40,orientation:filter[0],size:filter[1],color:filter[2] }).then(photos => { console.log(photos); setimagejson(photos); console.log()});
           
        }, 300);
        
        return ()=>{ clearTimeout(timerId); }
    },[param,filter]);
    return;
}
