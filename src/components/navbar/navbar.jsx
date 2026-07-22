import { Sparkles ,PencilSparkles, Heart, Compass} from 'lucide-react';
import { ButtonTwo } from '../buttons/ButtonTwo';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const arr=[0,1,2]
export function Navbar(){
    const [active,setactive]=useState(0);
    const navigate=useNavigate();
    return <>
    <nav className="fixed top-3 w-full flex justify-center bg-blue- z-503333 ">
        <div className="nav-wrapper flex justify-between w-[95%]  p-2 md:p-3 bg-white/30 bg-amber-400 shadow-(--shadow-spread) backdrop-blur-xl shadow-black rounded-4xl">
            <div className="flex gap-2 items-center"><div className="logo flex items-center bg-black/85 p-3 rounded-full"><Sparkles color='#ffffff' className='h-3 w-3 md:h-5 md:w-5' strokeWidth={1.2} /></div><span className="text-xl md:text-2xl">Pixefy</span></div>
         <ul className="flex gap-3">
            <ButtonTwo text='Discover' click={(e)=>{navigate("/")}} setactive={setactive} isActive={active==0} id={0} className='hover:bg-gray-200' ><Compass width={16} strokeWidth={1.7}/></ButtonTwo>
            <span className='relative'><ButtonTwo setactive={setactive} click={(e)=>{navigate("/liked")}} text='Liked &nbsp;' id={1} isActive={active==1}><Heart width={16} strokeWidth={1.7} className='text-transparent' fill='oklch(0.66 0.25 25.25)' /></ButtonTwo><div className='bg-red-500 text-white rounded-full px-1 py-1 absolute text-[10px] -top-1 -right-1'>100</div></span>
            <ButtonTwo text='Generate' className='hover:bg-gray-200' click={(e)=>{navigate("/images")}} id={2} setactive={setactive}  isActive={active==2} ><PencilSparkles width={16} strokeWidth={1.7}/></ButtonTwo>
         </ul>
        </div>
    </nav>
    </>
}