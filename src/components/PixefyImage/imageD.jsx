import React, { useEffect, useState } from 'react'
import { ImageInfo } from './ImageInfo';
import DownloadButton from '../buttons/DownloadButton';
import useIsLiked from '../../hooks/useIsLiked';
import { useParams } from 'react-router';
import { decrementLike, incrementLike } from '../../store/ReduxStore';
import useFetchSingle from '../../hooks/useFetchSingle';
import { useDispatch } from 'react-redux';
import { ImageShimmer } from '../shimmers/imageShimmer';
import { Button } from '../buttons/Button';
import { Heart, Share2 } from 'lucide-react';
function ImageD({category,item,id}) {
  const [reload,setreload]=useState(true);
  const disapatch=useDispatch();  
  const {imageData,isloading,error}=useFetchSingle(id,item); 
  const {liked,setLiked}=useIsLiked(imageData);
  
  return ( 
 imageData&&<div className="image-wrapper flex gap-10 my-6 flex-col md:flex-row">
            <div className="image w-full md:w-[40%] rounded-3xl overflow-hidden">{reload&&<ImageShimmer/>}{imageData?<img src={imageData.src.original} onLoad={()=>{setreload(false)}} alt="" className={`${reload?'w-0 h-0':'w-full h-full'} aspect-square object-cover`}/>:<ImageShimmer/>}</div>
            <div className="image-info">
                <div className="bg-gray-300 text-[10px] font-semibold text-gray-500 w-fit rounded-full p-1 px-2">{category?category.toUpperCase():"ALL"}</div>
                <div className="image-name py-2 text-4xl">{imageData.photographer}</div>
                <div className="image-description text-gray-500">{imageData.alt}</div>
                <div className="button-wrapper flex gap-3 my-6 ">
                <Button text="Like" className={`${liked?'bg-red-500 text-white':'hover:bg-red-300'}  transition-all` } onclick={()=>{ setLiked(!liked); !liked?disapatch(incrementLike(item)):disapatch(decrementLike(item)); }}><Heart strokeWidth={2.2} width={15} fill="white"/></Button>
                <DownloadButton imageData={imageData}/>
                <Button text="Share" className="hover:bg-gray-200 transition-al" onclick={(e)=>{ navigator.clipboard.writeText(location.href); }}><Share2 strokeWidth={2.2} width={15}/></Button>
                </div>
                <ImageInfo imageData={imageData} category={category}/>
                
            </div>
    </div>
  )
}

export default ImageD