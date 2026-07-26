import { Categories } from "../components/categoriesBar/CateBar";
import { Search } from "lucide-react";
import { MasouryImage } from "../components/masoury/masouryimage";
import { images } from "./utils";
import { useRef, useState } from "react";
import { FilterButton } from "../components/buttons/FilterButton";


export function Home() {
    const [prompt,setPrompt]=useState("");
    return <>
        <div className="mt-35 bg-amber px-2 md:px-5">
            <div className="head-wrapper">
                <div className="max-w-300 mx-auto w-[90%] md:w-[70%] flex flex-col items-center justify-center">
                    <div className="flex w-fit rounded-full px-2 shadow-(--shadow-thin-1) bg-white/50 justify-center items-center gap-2 py-1 backdrop-blur-xl  border-gray-200/60"><div className="daily-user w-2 h-2 rounded-full bg-orange-700 "></div><div className="flex items-center justify-center "><h1 className="text-[10px] user text-gray-500">Curated Daily 10k+ User</h1></div></div>
                    <h1 className="text-center bg-red- text-4xl md:text-6xl heading py-3 ">Find <span className="text-orange-700">Images</span> that moves you</h1>
                    <h5 className="text-gray-500 text-center text-sm md:text-base">A quiet, beautiful place to discover, save and generate visuals - builtfor moodboar, decks and daydreas</h5>
                    <div className="w-full  relative md:w-[80%] flex  bg-white/30 shadow-(--shadow-spread) backdrop-blur-xl p-3 rounded-full my-5 items-center"><Search className="  p-2" width={35} height={35} /><input type="search" placeholder="search" className="grow focus:outline-0" onKeyDown={(e)=>{ setPrompt(e.target.value); }}/>
                    <FilterButton />
                    </div>
                </div>
            </div>
            <MasouryImage prompt={prompt}/>
        </div>
    </>
}

7