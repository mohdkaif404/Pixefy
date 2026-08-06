
import { useEffect, useRef, useState } from "react";
import { Categories } from "../categoriesBar/CateBar"
import { ImageGrid } from "./ImageGrid";
import { cat , apiKey, filter} from "../../constant";
import { useDebounceFetcher } from "../shimmers/hooks/useDebounceFetcher";
import { ArrowRightIcon } from "lucide-react";
import { createClient } from "pexels";
import { MasouryShimmer } from "../shimmers/masouryShimmer";


const client=new createClient(apiKey);
export function MasouryImage({images,prompt,className,filters={},isAppear=true,cate}){
    const [category,setCategory]=useState({"home":cate||"All"});
    const [imagejson,setimagejson]=useState(undefined);
    const elemRef=useRef(null);
    const query=prompt||category.home;
    useDebounceFetcher(query,setimagejson,client,filters||{});
    
    useEffect(()=>{
      let element;
      const observer=new IntersectionObserver(async (e)=>{
        if(e[0].isIntersecting){
          console.log("diuir ")
          observer.unobserve(element);
          client.photos.search({ query, per_page: 40, page:imagejson.page+1,...filters }).then(photos => { setimagejson((prev)=>{ return {...photos,photos:[...prev.photos,...photos.photos]}}); });
        }
        
      },{threshold:1});
      setTimeout(() => {
        element=elemRef.current.lastElementChild;
        observer.observe(element);
      }, 1000);
    },[imagejson])
              
      
    return <>
    {isAppear&&<div className="overflow-x-auto hide-scroll"><div className={`flex gap-2 p-1  w-fit mx-auto overflow-hidden `}><Categories label={cat[0].label.toLocaleLowerCase()} cat={cat[0].cat} active={category.home.toLocaleLowerCase()} handleclick={setCategory}/></div></div>}
    {imagejson?<ImageGrid images={imagejson.photos} elemRef={elemRef} category={category.home} filter={filters}/>:<MasouryShimmer/>}
    </>
}