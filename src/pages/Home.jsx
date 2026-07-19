import { Categories } from "../components/categoriesBar/CateBar";
import { Filter, Search } from 'lucide-react';
import hills from '../assets/pexels-elias-obernosterer-2519830-10510523.jpg'
export function Home(){
    return <>
    <div className="mt-35 bg-amber">
        <div className="wrapper bg-blue-\\">
           <div className="max-w-300 bg-green- mx-auto w-[90%] md:w-[70%] flex flex-col items-center justify-center">
            <div className="flex w-fit rounded-full px-2 shadow-thin bg-white/50 justify-center items-center gap-2 py-1 backdrop-blur-xl  border-gray-200/60"><div className="daily-user w-2 h-2 rounded-full bg-orange-700 "></div><div className="flex items-center justify-center "><h1 className="text-[10px] user text-gray-500">Curated Daily 10k+ User</h1></div></div>
            <h1 className="text-center bg-red- text-4xl md:text-6xl heading py-3 ">Find <span className="text-orange-700">Images</span> that moves you</h1>
             <h5 className="text-gray-500 text-center text-sm md:text-base">A quiet, beautiful place to discover, save and generate visuals - builtfor moodboar, decks and daydreas</h5>
             <div className="w-full md:w-[80%] flex bg-white/30 shadow-thin backdrop-blur-xl p-3.5 rounded-full my-5"><Search className="pr-2"/><input type="search" placeholder="search" className="grow"/><Filter className="hover:bg-black hover:text-white rounded-full"></Filter></div>
        </div>
    </div>
    <Categories></Categories>
    <div className="massoury columns-2 md:columns-4 gap-3 w-full my-7  px-5">
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        <div className="rounded-4xl overflow-hidden my-3"><img src={hills} alt=""/></div>
        

        

    </div>

           
    </div>
    </>
}