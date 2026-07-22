import { Sparkle, Sparkles,PencilSparkles } from "lucide-react";
import { Categories } from "../components/categoriesBar/CateBar";
import { ButtonTwo } from "../components/buttons/ButtonTwo";

const aicat=['Photoreal',"Cinematic","Minimal","Watercolor","Neon","Editorial"]
export function Ai(){
    return <>
    <div className="mt-30 md:mt-40 px-3">
        <div className="flex flex-col justify-center items-center">
        <div className="flex w-fit rounded-full px-3 shadow-(--shadow-thin-1) bg-black justify-center text-white items-center gap-2 py-1 backdrop-blur-xl  border-gray-200/60"><Sparkles className="h-4 w-4" strokeWidth={1.7}/><div className="flex items-center justify-center "><h1 className="text-[10px] user">AI Studio - Beta</h1></div></div>
        <h1 className="text-center bg-red- text-4xl md:text-6xl heading py-3 ">Imagine it. <span className="text-orange-700">Generate it.</span></h1>
        <h5 className="text-gray-500 text-center text-sm md:text-base">Describe the picture in your head --- choose a style, hit generate.</h5>
        
    </div>
     <div className="generate-wrapper my-5 w-full md:w-[70%] mx-auto">
        <div className="input flex flex-col p-3 shadow-(--shadow-thin-1) rounded-3xl w-full">
            <input type="search" name="ai" id="ai" placeholder="A misty bamboo forest at dawn, soft sunbeams, ultra - detailed" className=""/>
            <div className="flex flex-wrap gap-2 mt-5 mb-3"><Categories cat={aicat} className={"text-xs px-2 py-0.5"}/></div>
            <ButtonTwo className="bg-orange-600 w-fit text-white ml-auto" isActive={true} text={"Generate"}><PencilSparkles width={16} strokeWidth={1.7}/></ButtonTwo>
       </div>
     </div>
    </div>
    
    </>
}