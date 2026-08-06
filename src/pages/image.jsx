import { ArrowLeft, ArrowRightIcon, MoveLeft,Download, ArrowDown, ChevronDown, Heart, Share, Share2, TruckElectric} from "lucide-react";
import { ButtonTwo } from "../components/buttons/ButtonTwo";
import { MasouryImage } from "../components/masoury/masouryimage";
import { Filter, Search,SlidersHorizontal } from 'lucide-react';
import { useEffect, useState } from "react";
import { Link, redirect, useLocation, useParams } from "react-router";
import { createClient } from "pexels";
import { apiKey } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { incrementLike,decrementLike } from "../store/ReduxStore";
import { ImageShimmer } from "../components/shimmers/imageShimmer";
import { ImageGrid } from "../components/masoury/ImageGrid";


const client=createClient(apiKey);
async function downloadImage(url){
    try{
        const response=await fetch(url); 
        const blob=await response.blob();
        const url2=URL.createObjectURL(blob);
        const a=document.createElement('a');
        a.href=url2;
        a.download=`pixefy-${new Date().getTime()}`;
        a.click();
        throw new Error("error");
    }catch(err){
        console.log(err.message," we can catch and show a download failed dialog");  
        redirect('/');
    }
    
}
export function Image(){
    const [liked,setLiked]=useState(false);
    const [ImageData,setImageData]=useState(false)
    const id=useParams().id.toString();
    const {state,pathname}=useLocation();
    const {item,filter,category}=state||{item:undefined,filter:{},category:'All'};
    const likedArray=useSelector((state)=>{ return state.liked.imagesLiked; });
    const disapatch=useDispatch();
    const [isActive,setActive]=useState(false);

    useEffect(()=>{
        if(item) setImageData(item);
        else{
            client.photos.show({id:id})
            .then((val)=>{setImageData(val)})
            .catch((err)=>{
                console.log("we can show any error if there is any error!!");
                redirect('/');
            }); 
        }
    
    },[id])
    useEffect(()=>{
        likedArray.forEach(element => {
           if(element.id==ImageData.id){ setLiked(!liked); }
        });
    },[ImageData])

    
    return <>
    {ImageData&&<div className="bg-blue- my-26 px-3 md:px-20 h-screen">
        <Link to={'/'}><ButtonTwo text="Back"  className="hover:bg-gray-200 transition-all"><ArrowLeft className="w-5 aspect-square" strokeWidth={1.2}/></ButtonTwo></Link>
        <div className="image-wrapper flex gap-10 my-6 flex-col md:flex-row">
            <div className="image w-full md:w-[60%] rounded-3xl overflow-hidden">{ImageData?<img src={ImageData.src.original}  alt="" className="w-full h-full aspect-square object-cover"/>:<ImageShimmer/>}</div>
            <div className="image-info">
                <div className="bg-gray-300 text-[10px] font-semibold text-gray-500 w-fit rounded-full p-1 px-2">{category?category.toUpperCase():"ALL"}</div>
                <div className="image-name py-2 text-4xl">{ImageData.photographer}</div>
                <div className="image-description text-gray-500">{ImageData.alt}</div>
                <div className="button-wrapper flex gap-3 my-6 ">
                <ButtonTwo text="Like" className={`${liked?'bg-red-500 text-white':'hover:bg-red-300'}  transition-all` } onclick={()=>{ setLiked(!liked); !liked?disapatch(incrementLike(item)):disapatch(decrementLike(item)); }}><Heart strokeWidth={2.2} width={15} fill="white"/></ButtonTwo>
                <div className="Download relative" onClick={()=> {setActive(!isActive)}}><ButtonTwo text={<div className="flex justify-center items-center gap-1 ">Download<ChevronDown strokeWidth={2.2} width={15}/></div>} className="bg-black text-white hover:bg-black/90"><Download width={15} strokeWidth={2.2}/></ButtonTwo>
                {isActive&&<div className="overflow-hidden rounded-2xl shadow-(--shadow-thin-1) bg-white absolute bottom-0 left-0 translate-y-[105%] text-xs w-full">
                    <div className="cursor-pointer w-full py-2 px-3 flex gap-1 justify-between items-center hover:bg-gray-200 transition-all" onClick={()=>{ downloadImage(ImageData.src.original) }}>Original<span className="text-xs text-gray-400">800 x 540</span></div>
                    <div className="cursor-pointer w-full py-2 px-3 flex gap-1 justify-between items-center hover:bg-gray-200 transition-all" onClick={()=>{ downloadImage(ImageData.src.small) }}>Small<span className="text-xs text-gray-400">400px</span></div>
                    <div className="cursor-pointer w-full py-2 px-3 flex gap-1 justify-between items-center hover:bg-gray-200 transition-all" onClick={()=>{ downloadImage(ImageData.src.medium) }}>Medium<span className="text-xs text-gray-400">500px</span></div>
                    <div className="cursor-pointer w-full py-2 px-3 flex gap-1 justify-between items-center hover:bg-gray-200 transition-all" onClick={()=>{ downloadImage(ImageData.src.large) }}>Large<span className="text-xs text-gray-400">700px</span></div>
                    </div>}</div>
                <ButtonTwo text="Share" className="hover:bg-gray-200 transition-al" onclick={(e)=>{ navigator.clipboard.writeText(location.href); }}><Share2 strokeWidth={2.2} width={15}/></ButtonTwo>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 p-2 shadow-(--shadow-thin-1) bg-white rounded-2xl my-5">
                    <div className="p-1"><div className="text-gray-500 text-sm">Dimensions</div><div className="">600 x 500</div></div>
                    <div className="p-1"><div className="text-gray-500 text-sm">Category</div><div className="">{category?category.toUpperCase():"All"}</div></div>
                    <div className="p-1"><div className="text-gray-500 text-sm">Author</div><div className="">{ImageData.photographer||'AI Generated'}</div></div>
                    <div className="p-1"><div className="text-gray-500 text-sm">License</div><div className="">Pixefy free</div></div>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center"><h3 className="heading text-2xl md:text-4xl"><span className="text-orange-700">More</span> Like this</h3><Link to={"/"}><span className="text-gray-600 px-1 text-sm">Explore all</span><ArrowRightIcon className="inline text-gray-500 h-3 w-3" strokeWidth={1.5}/></Link></div>
        <MasouryImage filters={filter} isAppear={false} cate={category}/>
    </div>}
    </>
}