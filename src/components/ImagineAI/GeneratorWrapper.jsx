import { GeneratorPanel } from "./GeneratorPanel";
import { ImageGrid } from "../masoury/ImageGrid";
import { images } from "../../pages/utils";
export function GeneratorWrapper(){
    return<>
    <div className="generate-wrapper my-5 w-full md:w-[70%] mx-auto">
       <GeneratorPanel/>
       <ImageGrid images={images}/>
     </div>
    </>
}