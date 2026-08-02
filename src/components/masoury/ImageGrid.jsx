import { Link } from "react-router";
import { ButtonTwo } from "../buttons/ButtonTwo";
import { Download, Heart } from "lucide-react";

export function ImageGrid({ images, className, elemRef }) {

    return <>
        <div className={`massoury columns-2 md:columns-3 gap-2 md:gap-3 w-full my-5  ${className}`} ref={elemRef}>
            {images.map((item, idx) => (
                <Link to={`images/${item.id}`} state={item} >
                    <div key={idx} className="rounded-3xl overflow-hidden mb-2 md:mb-3 relative" >
                        
                        <img
                            src={item.src.large}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Link>
            ))}
        </div>
    </>
}