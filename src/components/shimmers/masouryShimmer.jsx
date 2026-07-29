
const arr=Array.from({length:40});
export function MasouryShimmer(){

    return (
    <div className={`massoury columns-2 md:columns-3 gap-2 md:gap-3 w-full my-5  `} >
        {arr.map((elem,idx)=>{
            return <div className={`${idx%3==0?'h-100':'h-60'} bg-gray-300 animate-pulse rounded-3xl overflow-hidden mb-2 md:mb-3`}></div>
        })}
    </div>)
    
}