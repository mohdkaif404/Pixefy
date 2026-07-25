
import { useEffect, useState } from "react";
import { Categories } from "../categoriesBar/CateBar"
import { ImageGrid } from "./ImageGrid";
import {createClient} from 'pexels'

const cat = [
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

const apikey='rIq1qVLsxVgPM33XzNmn8YcJAsk2hNPkVMh9xJp8LfjHmvkmyLEOZMaF';
const client=new createClient(apikey);
export function MasouryImage({images,className,flag}){
    const [category,setCategory]=useState(cat[0]);
    const [imagejson,setimagejson]=useState([]);
    useEffect(()=>{
        let query = category;
        client.photos.search({ query, per_page: 40 }).then(photos => {setimagejson(photos); });
       
    },[category]);
    return <>
    <div className={`flex justify-center items-center overflow-x-auto md:flex-wrap gap-2 text-sm md:text-base py-1`}><Categories  cat={cat} handleclick={setCategory}/></div>
    {imagejson.photos&&<ImageGrid images={imagejson.photos}/>}
    </>
}