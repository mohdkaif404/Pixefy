import { Sparkles } from "lucide-react";
import { GeneratorWrapper } from "../components/ImagineAI/GeneratorWrapper";

export function Ai() {
    return <>
        <div className="mt-30 md:mt-40 px-3">
            <div className="flex flex-col justify-center items-center">
                <div className="flex w-fit rounded-full px-3 shadow-(--shadow-thin-1) bg-black justify-center text-white items-center gap-2 py-1 backdrop-blur-xl  border-gray-200/60"><Sparkles className="h-4 w-4" strokeWidth={1.7} /><div className="flex items-center justify-center "><h1 className="text-[10px] user">AI Studio - Beta</h1></div></div>
                <h1 className="text-center bg-red- text-4xl md:text-6xl heading py-3 ">Imagine it. <span className="text-orange-700">Generate it.</span></h1>
                <h5 className="text-gray-500 text-center text-sm md:text-base">Describe the picture in your head --- choose a style, hit generate.</h5>
            </div>
            <GeneratorWrapper />
        </div>

    </>
}