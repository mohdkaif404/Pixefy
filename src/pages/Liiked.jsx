import { useState } from "react";
import { MasouryImage } from '../components/masoury/masouryimage';
import { Heart } from 'lucide-react';
import { ButtonTwo } from '../components/buttons/ButtonTwo';
import { ImageGrid } from '../components/masoury/ImageGrid';
import { NoLikedCard } from '../components/Cards/NoLikedCard';
import { useSelector } from 'react-redux';


export function Liked(){
    const likedimages=useSelector((state)=>{ return state.liked.imagesLiked})

    const likedCount=likedimages?Array.from(likedimages).length:0;
    return <>
    <div className="mt-25 md:mt-30 px-3 md:px-10 ">
        <h6 className="text-orange-600 font-semibold">Your collection</h6>
        <h3 className="text-4xl liked py-1">Liked Images</h3>
        <h6 className="text-gray-600">{likedCount} Liked Images</h6>
        <div className="flex justify-center items-center ">
    </div>
    {likedCount>0?<ImageGrid images={likedimages}/>:<NoLikedCard/>}
    </div>
    
    </>
}