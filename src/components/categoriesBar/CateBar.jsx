import { useState } from "react";
import { ButtonTwo } from "../buttons/ButtonTwo";
import { memo } from "react";
import { useRef } from "react";
import { useReducer } from "react";
import { lazy } from "react";
export const Categories=memo(function Categories({ label,className, cat ,handleclick}) {
  const [active, setactive] = useState(0);
  console.log(active)
  return <>
  
    {cat.map((elem, id) => <ButtonTwo  className={`${active==id?"bg-black text-white":"bg-white text-black"} px-4 py-2 shadow-(--shadow-thin-1) ${active!=id?'hover:bg-orange-600/20':''} ${className}`}  key={id} text={elem} onclick={()=>{handleclick?.((prev)=>{return {...prev,[label]:elem.toLowerCase()}}); setactive(id); console.log(label) }}></ButtonTwo>)}

  </>
});
