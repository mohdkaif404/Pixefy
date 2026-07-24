import { useState } from "react";
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import { Categories } from "../categoriesBar/CateBar";

const filter = [
    {
        lable: "Orientation",
        Cat: ["All", "Portrait", "Landscape", "Square"]
    },
    {
        lable: "Trending",
        Cat: ["All", "Cool", "Mono", "Vibrant"]
    },
    {
        lable: "Sort",
        Cat: ["Trending", "Newest", "Popular"]
    }
]
export function FilterButton() {
    const [isActive, setActive] = useState(false);
    return <>
        <SlidersHorizontal className={` ${isActive ? "bg-black text-white" : ""} p-2 rounded-full hover:bg-black hover:text-white transition-all cursor-pointer`} width={35} height={35} onClick={() => { setActive((a) => !a) }} />
        {isActive && <div className="w-full rounded-3xl font-semibold shadow-(--shadow-thin-1) h-fit p-5 bg-white backdrop-blur-3xl absolute bottom-0 left-0 translate-y-[105%]">
            {filter.map((val) => <div className="flex flex-col gap-1.5 mb-3"><h6 className="text-gray-500 text-sm md:text-base">{val.lable}</h6>
                <div className="flex flex-wrap gap-2"><Categories className={"text-xs md:text-sm"} cat={val.Cat} /></div></div>)}
        </div>}
    </>
}