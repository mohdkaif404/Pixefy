
import { useEffect, useRef, useState,memo } from "react";
import { Categories } from "../categoriesBar/CateBar"
import { ImageGrid } from "./ImageGrid";
import { cat , apiKey} from "../../constant";
import { usePixefyFetcher } from "../../../hooks/useDebounceFetcher";
import { ArrowRightIcon } from "lucide-react";
import { createClient } from "pexels";
import { MasouryShimmer } from "../shimmers/masouryShimmer";
import { Card1 } from "../Cards/Card1";

const client=new createClient(apiKey);
const EMPTY_OBJ={};
export const MasouryImage=memo(function MasouryImage({images,prompt,className,filters,isAppear=true,cate}){
    const [category,setCategory]=useState({"home":cate||"All"});
    const query=prompt||category.home;
    const {imagejson,error,isloading,elemRef}=usePixefyFetcher(query,filters||EMPTY_OBJ);
    
    
    return <> 
    {isAppear&&<div className="overflow-x-auto hide-scroll"><div className={`flex gap-2 p-1  w-fit mx-auto overflow-hidden `}><Categories label={cat[0].label.toLocaleLowerCase()} cat={cat[0].cat} active={category.home.toLocaleLowerCase()} handleclick={setCategory}/></div></div>}
    {error&&<Card1 index={1}/>}   
    {imagejson?<ImageGrid images={imagejson.photos} elemRef={elemRef} category={category.home} filter={filters} />:
    !error&&<MasouryShimmer/>}
    {isloading&&<MasouryShimmer/>}  
    
    </>
});