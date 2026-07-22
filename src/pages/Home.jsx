import { Categories } from "../components/categoriesBar/CateBar";
import { Filter, Search,SlidersHorizontal } from 'lucide-react';
import { MasouryImage } from "../components/masoury/masouryimage";
import hills from '../assets/pexels-elias-obernosterer-2519830-10510523.jpg';
import marcoPozzi from '../assets/pexels-marco-pozzi-2156102230-34038189.jpg';
// import matreding1 from '../assets/pexels-matreding-34111858 (1).jpg';
import matreding2 from '../assets/pexels-matreding-34111858.jpg';
import nati from '../assets/pexels-nati-87264186-28483662.jpg';
import prolificPeople from '../assets/pexels-prolificpeople-33711190.jpg';
import sebastian from '../assets/pexels-sebastiaan9977-1097456.jpg';
import therato from '../assets/pexels-therato-1933239.jpg';
import tobiAndChris from '../assets/pexels-tobiandchris-27837644.jpg';
import vince from '../assets/pexels-vince-28962828.jpg';
import { useState } from "react";

const images = [
  {
    id: 1,
    name: 'Hills',
    image: hills,
  },
  {
    id: 2,
    name: 'Marco Pozzi',
    image: marcoPozzi,
  },
  {
    id: 4,
    name: 'Matreding 2',
    image: matreding2,
  },
  {
    id: 5,
    name: 'Nati',
    image: nati,
  },
  {
    id: 6,
    name: 'Prolific People',
    image: prolificPeople,
  },
  {
    id: 7,
    name: 'Sebastian',
    image: sebastian,
  },
  {
    id: 8,
    name: 'Therato',
    image: therato,
  },
  {
    id: 9,
    name: 'Tobi and Chris',
    image: tobiAndChris,
  },
  {
    id: 10,
    name: 'Vince',
    image: vince,
  },
];

const filter=[
    {
        lable:"Orientation",
        Cat:["All","Portrait","Landscape","Square"]
    },
    {
        lable:"Trending",
        Cat:["All","Cool","Mono","Vibrant"]
    },
    {
        lable:"Sort",
        Cat:["Trending","Newest","Popular"]
    }
]
export default images;
export function Home(){
    const [isActive,setActive]=useState(false);
    return <>
    <div className="mt-35 bg-amber px-2 md:px-5">
        <div className="wrapper bg-blue-\\">
           <div className="max-w-300 bg-green- mx-auto w-[90%] md:w-[70%] flex flex-col items-center justify-center">
            <div className="flex w-fit rounded-full px-2 shadow-(--shadow-thin-1) bg-white/50 justify-center items-center gap-2 py-1 backdrop-blur-xl  border-gray-200/60"><div className="daily-user w-2 h-2 rounded-full bg-orange-700 "></div><div className="flex items-center justify-center "><h1 className="text-[10px] user text-gray-500">Curated Daily 10k+ User</h1></div></div>
            <h1 className="text-center bg-red- text-4xl md:text-6xl heading py-3 ">Find <span className="text-orange-700">Images</span> that moves you</h1>
             <h5 className="text-gray-500 text-center text-sm md:text-base">A quiet, beautiful place to discover, save and generate visuals - builtfor moodboar, decks and daydreas</h5>
             <div className="w-full  relative md:w-[80%] flex  bg-white/30 shadow-(--shadow-spread) backdrop-blur-xl p-3 rounded-full my-5 items-center"><Search className="  p-2" width={35} height={35}/><input type="search" placeholder="search" className="grow "/><SlidersHorizontal className={` ${isActive?"bg-black text-white":""} p-2 rounded-full hover:bg-black hover:text-white`} width={35} height={35} onClick={()=>{setActive((a)=>!a)}} />
             {isActive&&<div className="w-full rounded-3xl font-semibold shadow-(--shadow-thin-1) h-fit p-5 bg-white backdrop-blur-3xl absolute bottom-0 left-0 translate-y-[105%]">
                {filter.map((val)=> <div className="flex flex-col gap-1.5 mb-3"><h6 className="text-gray-600 text-sm md:text-base">{val.lable}</h6>
             <div className="flex flex-wrap gap-2"><Categories className={"text-xs md:text-sm"} cat={val.Cat}/></div></div>)}
             
             </div>}
             </div>
        </div> 
    </div>
    
    <MasouryImage images={images} flag={true}/>
    </div>
    </>
}