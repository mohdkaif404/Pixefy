import { Link } from "react-router"
import { ButtonTwo } from "../buttons/ButtonTwo"
import { Heart } from "lucide-react"
export function NoLikedCard(){
    return<>
    <div className="p-10 shadow-(--shadow-thin-1) rounded-3xl my-4">
        <div className="heart w-fit p-3 mx-auto bg-gray-200 rounded-full mb-2 text-gray-500"><Heart/></div>
        <h4 className='heading text-center text-3xl my-3'>No likes yet</h4>
        <h1 className='text-gray-500 text-center my-3'>Tap the heart on any image to build your private collection.</h1>
        <Link to={'/'}> <ButtonTwo className='bg-black text-white mt-3 mx-auto py-3 px-4 hover:scale-[1.08] ' text="Discover Images" isActive={true} ></ButtonTwo></Link>
      </div>
    </>
}