import { useState } from "react";
import { Button } from "../buttons/ButtonOne";



export function Categories({className,cat}){
    const [active,setactive]=useState(0)
    
    return <>
     
   {cat.map((elem,id)=> <Button className={`px-4 py-2 shadow-(--shadow-thin-1) hover:bg-orange-600/20 ${className}`} setactive={setactive} isActive={active==id} key={id} id={id}             >{elem}</Button>)}
  
    </>
}