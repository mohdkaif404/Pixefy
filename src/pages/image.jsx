import { ArrowLeft } from "lucide-react";
import { ButtonTwo } from "../components/buttons/ButtonTwo";
import hills from '../assets/pexels-elias-obernosterer-2519830-10510523.jpg';
export function Image(){
    return <>
    <div className="bg-blue- my-30 px-3 md:px-20 h-screen">
        <ButtonTwo text="Back" isActive={true}><ArrowLeft className="w-5 aspect-square" strokeWidth={1.2}/></ButtonTwo>
        <div className="image-wrapper flex gap-10 my-6 flex-col md:flex-row">
            <div className="image w-full md:w-[60%] rounded-3xl overflow-hidden"><img src={hills} alt="" className="w-full aspect-square object-cover"/></div>
            <div className="image-info">
                <div className="bg-gray-300 text-[10px] font-semibold text-gray-500 w-fit rounded-full p-1 px-2">STREET</div>
                <div className="image-name py-2 text-4xl">Diago Marin</div>
                <div className="image-description text-gray-500">A handpicked frame from the Pixyfy collection — free to view, save and share</div>
                <div className="button-wrapper"></div>
                <div className="grid grid-cols-2 grid-rows-2 p-2 shadow-(--shadow-thin-1) bg-white rounded-2xl my-5">
                    <div className="p-1"><div className="text-gray-500 text-sm">Dimensions</div><div className="">600 x 500</div></div>
                    <div className="p-1"><div className="text-gray-500 text-sm">Category</div><div className="">Street</div></div>
                    <div className="p-1"><div className="text-gray-500 text-sm">Author</div><div className="">Diago Marin</div></div>
                    <div className="p-1"><div className="text-gray-500 text-sm">License</div><div className="">Pixefy free</div></div>
                </div>
            </div>
        </div>
    </div>
    </>
}