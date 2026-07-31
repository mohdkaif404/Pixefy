import { Link } from "react-router";
import { ButtonTwo } from "../buttons/ButtonTwo";
import { Download, Heart } from "lucide-react";

export function ImageGrid({ images, className, elemRef }) {

    return <>
        <div className={`massoury columns-2 md:columns-3 gap-2 md:gap-3 w-full my-5  ${className}`} ref={elemRef}>
            {images.map((item, idx) => (
                <Link to={`images/${item.id}`} state={item} >
                    <div key={idx} className="rounded-3xl overflow-hidden mb-2 md:mb-3 relative" >
                        <div className="absolute bg-black/20 w-full h-full flex transition-all flex-col justify-between p-4 rounded-2xl z-50 ">
                            <div className="h-30"></div>
                            <div className=" bg-blue- flex justify-between"><ButtonTwo text="Download" className="bg-white/40 text-white border border-white/30"><Download width={16} strokeWidth={1.7} /></ButtonTwo><ButtonTwo><Heart width={20} strokeWidth={1.7}></Heart></ButtonTwo></div>
                        </div>
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