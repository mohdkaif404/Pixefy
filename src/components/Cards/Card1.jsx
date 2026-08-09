import { Link } from "react-router"
import { Button } from "../buttons/Button"
import { Binoculars, Heart, Loader, RefreshCcw, ToolCase } from "lucide-react";
const cards=[
  {

    reason:'No likes yet',
    message:'Tap the heart on any image to build your private collection.',
    to:'/',
    icon:<Heart/>,
    buttonText:'Discover Images',
    buttonIcon:<Binoculars width={16} height={16} />
  },
  {
    reason:'Let’s try that again!',
    message:'We had trouble loading your images. Tap reload to refresh the gallery.',
    to:'/',
    icon:<ToolCase/>,
    buttonText:'Refresh Page',
    buttonIcon:<RefreshCcw width={16} height={16}/>
  }
]
export function Card1({index}){
    return<>
    <div className="p-10 shadow-(--shadow-thin-1) rounded-3xl my-4">
        <div className="heart w-fit p-3 mx-auto bg-gray-200 rounded-full mb-2 text-gray-500">{cards[index].icon}</div>
        <h4 className='heading text-center text-3xl my-3'>{cards[index].reason}</h4>
        <h1 className='text-gray-500 text-center my-3'>{cards[index].message}</h1>
        <Link to={cards[index].to}> <Button className='bg-black text-white mt-3 mx-auto py-3 px-4 hover:scale-[1.08] ' text={cards[index].buttonText} isActive={true} >{cards[index]?.buttonIcon}</Button></Link>
      </div>
    </>
}