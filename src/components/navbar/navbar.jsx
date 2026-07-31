import { Sparkles ,PencilSparkles, Heart, Compass} from 'lucide-react';
import { ButtonTwo } from '../buttons/ButtonTwo';
import { useId, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const arr=[0,1,2];
const nav=[
    {
        to:'/',
        id:0,
        lable:"Discover",
        Icon:"Compass"
    },
    {
        to:'/liked',
        id:1,
        lable:"Liked ",
        Icon:"Heart"
    },
    {
        to:'/generate',
        id:2,
        lable:"Generate",
        Icon:"PencilSparkles"
    }
]

export function Navbar(){
    const [active,setactive]=useState(nav[0].id);
    const likedCount=useSelector((state)=>{ return state.liked.likedCount; })
    const navigate=useNavigate()
    return <>
    <nav className="fixed top-3 w-full flex justify-center bg-blue- z-503333 ">
        <div className="nav-wrapper flex justify-between w-[95%]  p-2 md:p-3 bg-white/30  shadow-(--shadow-spread) backdrop-blur-xl shadow-black rounded-4xl">
            <div className="flex gap-2 items-center"><div className="logo flex items-center bg-black/85 p-3 rounded-full"><Sparkles color='#ffffff' className='h-3 w-3 md:h-5 md:w-5' strokeWidth={1.2} /></div><span className="text-xl md:text-2xl">Pixefy</span></div>
         <ul className="flex gap-3">
            {nav.map((elem,idx)=>
                elem.to!='/liked'?<ButtonTwo text={active==elem.id?elem.lable:''} onclick={(e)=>{navigate(elem.to,{state:"kaif"}); setactive(elem.id);}} className='hover:bg-gray-200 transition-all' key={idx} ><Compass width={16} strokeWidth={1.7}/></ButtonTwo>:
                <span className='relative'><ButtonTwo onclick={(e)=>{navigate(elem.to); setactive(elem.id);}} text={active==elem.id?'Liked ':''} className='hover:bg-gray-200 transition-all' key={idx}><Heart width={16} strokeWidth={1.7} className='text-transparent' fill='oklch(0.66 0.25 25.25)' /></ButtonTwo><div className='bg-red-500 text-white rounded-full p-1 px-2 absolute text-[10px] -top-1 -right-1'>{likedCount}</div></span>
            )}
    
         </ul>
        </div>
    </nav>
    </>
}