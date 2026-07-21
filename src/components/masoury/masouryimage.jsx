

export function MasouryImage({images,className}){
    return <>
    <div className={`massoury columns-2 md:columns-4 gap-2 md:gap-3 w-full my-5 px-2 md:px-5 ${className}`}>
       
  {images.map((item) => (
    <div key={item.id} className="rounded-3xl overflow-hidden mb-2 md:mb-3">
      <img
        src={item.image}
        alt=""
        className=""
      />
    </div>
  ))}

    </div>
    </>
}