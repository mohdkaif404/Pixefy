import { Link } from "react-router";
import { MasouryShimmer } from "../shimmers/masouryShimmer";


export function ImageGrid({ images, className='', elemRef ,filter,category}) {
   
    return <>
        <div className={`massoury columns-2 md:columns-3 gap-2 md:gap-3 w-full my-5  ${className}`} ref={elemRef}>
           
            {images.map((item, idx) => ( 
                <Link to={`/images/${item.id}`} state={{item,filter,category}} key={idx}>
                    <div  className="rounded-3xl overflow-hidden mb-2 md:mb-3" >
        
                        <img 
                            src={item.src.medium||item.src.large||item.src.original}
                            alt={item.alt||"image"}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Link>
            ))}
           
        </div>
         
    </>
}