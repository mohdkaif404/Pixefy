
import { useEffect, useRef, useState } from "react";
import { Categories } from "../categoriesBar/CateBar"
import { ImageGrid } from "./ImageGrid";
import { cat , apiKey} from "../../constant";
import { useDebounceFetcher } from "../../hooks/useDebounceFetcher";
import { ArrowRightIcon } from "lucide-react";
import { createClient } from "pexels";
import { MasouryShimmer } from "../shimmers/masouryShimmer";



const client=new createClient(apiKey);
export function MasouryImage({images,prompt,className,filters}){
    const [category,setCategory]=useState(cat[0]);
    const [imagejson,setimagejson]=useState(undefined);
    const elemRef=useRef(null);
    
    const query=prompt||category;
    
    useDebounceFetcher(query,setimagejson,client,filters);
    
    useEffect(()=>{
      let element;
      const observer=new IntersectionObserver(async (e)=>{
        if(e[0].isIntersecting){
          observer.unobserve(element);
          client.photos.search({ query, per_page: 40, page:imagejson.page+1,orientation:filters[0],size:filters[1],color:filters[2] }).then(photos => { console.log(photos); setimagejson((prev)=>{ return {...photos,photos:[...prev.photos,...photos.photos]}}); console.log()});
        }
        
      },{threshold:1});
      setTimeout(() => {
        element=elemRef.current.lastElementChild;
        observer.observe(element);
      }, 1000);
    },[imagejson])
              
      
    return <>
    <div className={`flex justify-center items-center overflow-x-auto md:flex-wrap gap-2 text-sm md:text-base py-1`}><Categories  cat={cat} handleclick={setCategory}/></div>
    {imagejson?<ImageGrid images={imagejson.photos} elemRef={elemRef}/>:<MasouryShimmer/>}
    </>
}