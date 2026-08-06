import { useEffect, useRef } from 'react';



export function useDebounceFetcher(param,setimagejson,client,filter){
    const timerId=useRef(undefined);

    useEffect(()=>{
        if(!param) return;
        
        let query=param;
        clearTimeout(timerId.current);
        timerId.current=setTimeout(() => {

            client.photos.search({ query, per_page: 40,...filter })
            .then((photos) => {  setimagejson(photos); });
           
        }, 300);
        
        return ()=>{ clearTimeout(timerId); }
    },[param,filter]);
    return;
}
