import { useState } from "react";
import { ButtonTwo } from "../buttons/ButtonTwo";



export function Categories({ className, cat }) {
  const [active, setactive] = useState(0)

  return <>
    {cat.map((elem, id) => <ButtonTwo onclick={()=>{setactive(id); 

    }} className={`${active==id?"bg-black text-white":"bg-white text-black"} px-4 py-2 shadow-(--shadow-thin-1) ${active!=id?'hover:bg-orange-600/20':''} ${className}`}  key={id} text={elem}></ButtonTwo>)}

  </>
}