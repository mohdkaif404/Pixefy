
import { useEffect, useRef, useState } from "react";
import { Categories } from "../categoriesBar/CateBar"
import { ImageGrid } from "./ImageGrid";
import { cat , apiKey} from "../../constant";
import { useDebounceFetcher } from "../shimmers/hooks/useDebounceFetcher";
import { ArrowRightIcon } from "lucide-react";
import { createClient } from "pexels";
import { MasouryShimmer } from "../shimmers/masouryShimmer";



const client=new createClient(apiKey);
export function MasouryImage({images,prompt,className,filters={
    'orientation':"All",
    'size':"All",
    'color':"All",
},isAppear=true,cate}){
    const [category,setCategory]=useState({"home":cate||"All"});
    const [imagejson,setimagejson]=useState(undefined);
    const elemRef=useRef(null);
    
    const query=prompt||category.home;
    console.log(filters)
    useDebounceFetcher(query,setimagejson,client,filters);
    
    useEffect(()=>{
      let element;
      const observer=new IntersectionObserver(async (e)=>{
        if(e[0].isIntersecting){
          observer.unobserve(element);
          client.photos.search({ query, per_page: 40, page:imagejson.page+1,...filters }).then(photos => { console.log(photos); setimagejson((prev)=>{ return {...photos,photos:[...prev.photos,...photos.photos]}}); console.log()});
        }
        
      },{threshold:1});
      setTimeout(() => {
        element=elemRef.current.lastElementChild;
        observer.observe(element);
      }, 1000);
    },[imagejson])
              
      
    return <>
    {isAppear&&<div className={`flex justify-center items-center overflow-x-auto md:flex-wrap gap-2 text-sm md:text-base py-1`}><Categories label={cat[0].label.toLocaleLowerCase()} cat={cat[0].cat} active={category.home.toLocaleLowerCase()} handleclick={setCategory}/></div>}
    {imagejson?<ImageGrid images={imagejson.photos} elemRef={elemRef} category={category.home} filter={filters}/>:<MasouryShimmer/>}
    </>
}