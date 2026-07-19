import { useState } from "react";

export function Button({className,children,setactive,isActive,id}){
   
   return <>
      <button className={`${isActive?"bg-black text-white":"bg-white text-black"} rounded-4xl ${className}`} onClick={(e)=>{
         setactive(id);
      }}>{children}</button>
   </>
}
