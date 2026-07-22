
import { Categories } from "../categoriesBar/CateBar"
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
    {flag&& <div className={`flex justify-center items-center overflow-x-auto md:flex-wrap gap-2 text-sm md:text-base py-1`}><Categories  cat={cat}/></div>}
    <div className={`massoury columns-2 md:columns-4 gap-2 md:gap-3 w-full my-5  ${className}`}>
  {images.map((item) => (
    <div key={item.id} className="rounded-3xl overflow-hidden mb-2 md:mb-3">
      <img
        src={item.image}
        alt=""
        className=""
      />
    </div>
  ))}

    </div>
    </>
}