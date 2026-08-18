import React from 'react'
import { Button } from '../buttons/Button'
import { ArrowLeft, MoveLeft } from 'lucide-react'
import { Link } from 'react-router'
const arr=Array.from({length:36000});
function Error404() {
  return (<>
    <div className="mx-auto w-fit my-10">
        <div className="text-orange-600 text-[10rem] font-bold leading-[130px]">4<span className='text-black'>0</span>4</div>
        <div className="font-semibold my-2">Page you are looking for doesn't exist.</div>
        <Link to={'/'} ><Button text='Go Back' className='bg-black text-white hover:scale-[1.05]'><ArrowLeft width={16} height={16}/></Button></Link>
    </div>
    <div className="grid grid-cols-600 grid-rows-600 fixed top-0 -z-[100]">
      {arr.map(()=>{
        return <div className='w-3 aspect-square bg-white ' onMouseEnter={(e)=>{e.target.style.backgroundColor='red'; }}></div>
      })}
    </div>
    </>
  )
}

export default Error404