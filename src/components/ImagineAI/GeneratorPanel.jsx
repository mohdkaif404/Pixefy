import { Categories } from "../categoriesBar/CateBar"
import { ButtonTwo } from "../buttons/ButtonTwo"
import { PencilSparklesIcon } from "lucide-react"

const aicat=['Photoreal',"Cinematic","Minimal","Watercolor","Neon","Editorial"]
export function GeneratorPanel(){
    return <>
    <div className="input flex flex-col p-3 shadow-(--shadow-spread) rounded-3xl w-full">
            <input type="search" name="ai" id="ai" placeholder="A misty bamboo forest at dawn, soft sunbeams, ultra - detailed" className=""/>
            <div className="flex flex-wrap gap-2 mt-5 mb-3"><Categories cat={aicat} className={"text-xs px-2 py-0.5"}/></div>
            <ButtonTwo className="bg-orange-600 w-fit text-white ml-auto hover:scale-[1.03]" isActive={true} text={"Generate"} ><PencilSparklesIcon width={16} strokeWidth={1.7}/></ButtonTwo>
    </div>
    </>
}