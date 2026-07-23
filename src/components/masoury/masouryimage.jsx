
import { Categories } from "../categoriesBar/CateBar"
import { ImageGrid } from "./ImageGrid";
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
export function MasouryImage({images,className,flag}){
    return <>
    <div className={`flex justify-center items-center overflow-x-auto md:flex-wrap gap-2 text-sm md:text-base py-1`}><Categories  cat={cat}/></div>
    <ImageGrid images={images}/>
    </>
}