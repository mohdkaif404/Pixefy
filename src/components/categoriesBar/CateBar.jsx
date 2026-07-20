import { useState } from "react";
import { Button } from "../buttons/ButtonOne";

const categories = [
  "All",
  "Nature",
  "Architecture",
  "People",
  "Travel",
  "Animals",
  "Food",
  "Technology",
  "Abstract",
  "Fashion",
  "Interiors",
  "Street"
];

export function Categories(){
    const [active,setactive]=useState(0)
    
    return <>
     
    <div className="px-4 py-2 flex justify-center items-center overflow-scroll md:flex-wrap gap-2 text-sm md:text-base">{categories.map((elem,id)=> <Button className={"px-4 py-2 shadow-thin hover:bg-orange-600/20"} setactive={setactive} isActive={active==id} key={id} id={id}             >{elem}</Button>)}
    </div>
    </>
}