import { ChevronDown, Download } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from './Button';
async function downloadImage(url){
    try{
        const response=await fetch(url); 
        const blob=await response.blob();
        const url2=URL.createObjectURL(blob);
        const a=document.createElement('a');
        a.href=url2;
        a.download=`pixefy-${new Date().getTime()}`;
        a.click();

    }catch(err){
        console.log(err.message," we can catch and show a download failed dialog");  

    }
    
}
function DownloadButton({imageData}) {
    const [isActive,setActive]=useState(false);
    
    return (
        <div className="Download relative" onClick={() => { setActive(!isActive) }}><Button text={<div className="flex justify-center items-center gap-1 ">Download<ChevronDown strokeWidth={2.2} width={15} /></div>} className="bg-black text-white hover:bg-black/90"><Download width={15} strokeWidth={2.2} /></Button>
            {isActive && <div className="overflow-hidden rounded-2xl shadow-(--shadow-thin-1) bg-white absolute bottom-0 left-0 translate-y-[105%] text-xs w-full">
                <div className="cursor-pointer w-full py-2 px-3 flex gap-1 justify-between items-center hover:bg-gray-200 transition-all" onClick={() => { downloadImage(imageData.src.original) }}>Original<span className="text-xs text-gray-400">800 x 540</span></div>
                <div className="cursor-pointer w-full py-2 px-3 flex gap-1 justify-between items-center hover:bg-gray-200 transition-all" onClick={() => { downloadImage(imageData.src.small) }}>Small<span className="text-xs text-gray-400">400px</span></div>
                <div className="cursor-pointer w-full py-2 px-3 flex gap-1 justify-between items-center hover:bg-gray-200 transition-all" onClick={() => { downloadImage(imageData.src.medium) }}>Medium<span className="text-xs text-gray-400">500px</span></div>
                <div className="cursor-pointer w-full py-2 px-3 flex gap-1 justify-between items-center hover:bg-gray-200 transition-all" onClick={() => { downloadImage(imageData.src.large) }}>Large<span className="text-xs text-gray-400">700px</span></div>
        </div>}</div>
    )
}

export default DownloadButton