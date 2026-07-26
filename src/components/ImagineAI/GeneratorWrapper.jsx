import { GeneratorPanel } from "./GeneratorPanel";
import { ImageGrid } from "../masoury/ImageGrid";
import { images } from "../../pages/utils";
import { useEffect, useState } from "react";
let img=[]
let count=0;
export function GeneratorWrapper(){
    const [prompt,setPrompt]=useState("A cat");
    count++;

    return<>
    <div className="generate-wrapper my-5 w-full md:w-[70%] mx-auto">
       <GeneratorPanel setPrompt={setPrompt}/>
       <ImageGrid images={[ 
             {
                id: count,
                name: 'Hills',
                src: {
                    medium:`https://image.pollinations.ai/prompt/${prompt}`
                },
                alt:"AI Generated",
                
            },
        ]}/>
     </div>
    </>
}