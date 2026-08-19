import { Sparkles ,PencilSparkles, Heart, Compass} from 'lucide-react';
import { Button } from '../buttons/Button';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';

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
    const [isActive,setActive]=useState(nav[0].id);
    const likedimages=useSelector((state)=>{ return state.liked.imagesLiked})
    const likedCount=likedimages?Array.from(likedimages).length:0;
    
    return <>
    <nav className="fixed top-3 w-full flex justify-center bg-blue- z-50 ">
        <div className="nav-wrapper flex justify-between w-[95%]  p-2 md:p-3 bg-white/30  shadow-(--shadow-spread) backdrop-blur-xl shadow-black rounded-4xl">
            <div className="flex gap-2 items-center"><div className="logo flex items-center bg-black/85 p-3 rounded-full"><Sparkles color='#ffffff' className='h-3 w-3 md:h-5 md:w-5' strokeWidth={1.2} /></div><span className="text-xl md:text-2xl">Pixefy</span></div>
         <div className="flex gap-3">
            {nav.map((elem,idx)=>
                elem.to!='/liked'?<NavLink to={elem.to} key={elem.id} className={({isActive})=>{ isActive&&setActive(elem.id); return ""}}><Button  text={isActive==elem.id?elem.lable:''} className='hover:bg-gray-200 transition-all'><Compass width={16} strokeWidth={1.7}/></Button></NavLink>:
                <NavLink to={elem.to} key={elem.id} className={({isActive})=>{ isActive&&setActive(elem.id); return ""}}><span className='relative'><Button  text={isActive==elem.id?'Liked ':''} className='hover:bg-gray-200 transition-all' ><Heart width={16} strokeWidth={1.7} className='text-transparent' fill='oklch(0.66 0.25 25.25)' /></Button><div className='bg-red-500 text-white rounded-full p-1 px-2 absolute text-[10px] -top-1 -right-1'>{likedCount}</div></span></NavLink>
            )}
    
         </div>
        </div>
    </nav>
    </>
}