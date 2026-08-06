import { useState } from "react";
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import { Categories } from "../categoriesBar/CateBar";
import { filter } from "../../constant";

export function FilterButton({setFilter,filters}) {
    const [isActive, setActive] = useState(false);

    return <>
        <SlidersHorizontal className={` ${isActive ? "bg-black text-white" : ""} p-2 rounded-full hover:bg-black hover:text-white transition-all cursor-pointer`} width={35} height={35} onClick={() => { setActive((a) => !a) }} />
        {isActive && <div className="w-full rounded-3xl font-semibold shadow-(--shadow-thin-1) h-fit p-5 bg-white backdrop-blur-3xl absolute bottom-0 left-0 translate-y-[105%]">
            {filter.map((val,idx) =>{ return <div className="flex flex-col gap-1.5 mb-3" ><h6 className="text-gray-500 text-sm md:text-base">{val.label}</h6>
                <div className="flex flex-wrap gap-2"><Categories className={"text-xs md:text-sm"} cat={val.cat} label={val.label.toLowerCase()} active={filters[val.label.toLowerCase()].toLowerCase()} handleclick={setFilter}/></div></div>})}
        </div>}
    </>
}