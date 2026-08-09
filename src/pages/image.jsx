import { ArrowLeft, ArrowRightIcon, MoveLeft} from "lucide-react";
import { Button } from "../components/buttons/Button";
import { MasouryImage } from "../components/masoury/masouryimage";
import { Filter, Search,SlidersHorizontal } from 'lucide-react';
import { Link, useLocation, useParams } from "react-router";
import ImageD from "../components/PixefyImage/imageD";




export function Image(){
    const {state,pathname}=useLocation();
    const {item,filter,category}=state||{item:undefined,filter:undefined,category:'All'};
    const id=useParams().id.toString(); 
    return <>   
    {<div className="bg-blue- my-26 px-3 md:px-20 h-screen">
        <Link to={'/'}><Button text="Back"  className="hover:bg-gray-200 transition-all"><ArrowLeft className="w-5 aspect-square" strokeWidth={1.2}/></Button></Link>
        <ImageD category={category} item={item} id={id}/>
        <div className="flex justify-between items-center"><h3 className="heading text-2xl md:text-4xl"><span className="text-orange-700">More</span> Like this</h3><Link to={"/"}><span className="text-gray-600 px-1 text-sm">Explore all</span><ArrowRightIcon className="inline text-gray-500 h-3 w-3" strokeWidth={1.5}/></Link></div>
        <MasouryImage filters={ filter } isAppear={false} cate={category}/>
    </div>}
    </>
}