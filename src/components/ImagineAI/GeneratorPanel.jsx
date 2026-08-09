import { Categories } from "../categoriesBar/CateBar"
import { Button } from "../buttons/Button"
import { PencilSparklesIcon } from "lucide-react"
import { useState ,memo} from "react"
import { aicat } from "../../constant"

export default memo(({setPrompt})=>{

    const [str,setstr]=useState('');
    return <>
    <div className="input flex flex-col p-3 shadow-(--shadow-spread) rounded-3xl w-full">
            <input type="search" name="ai" id="ai" placeholder="A misty bamboo forest at dawn, soft sunbeams, ultra - detailed" className="focus:outline-0 focus:decoration-07" onChange={(e)=>{setstr(e.target.value);}}/>
            <div className="flex flex-wrap gap-2 mt-5 mb-3"><Categories cat={aicat} className={"text-xs px-2 py-0.5"}/></div>
            <Button className="bg-orange-600 w-fit text-white ml-auto hover:scale-[1.03]"  text={"Generate"} onclick={()=>{setPrompt(str);}} ><PencilSparklesIcon width={16} strokeWidth={1.7} /></Button>
    </div>
    </>
});