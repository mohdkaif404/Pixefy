
import { Categories } from "../categoriesBar/CateBar"
export function MasouryImage({images,className,flag}){
    return <>
    {flag&&<Categories className={"mx-4 p-3"} />}
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