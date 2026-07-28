export function ImageGrid({ images ,className,elemRef}) {
    
    return <>
    <div className={`massoury columns-2 md:columns-4 gap-2 md:gap-3 w-full my-5  ${className}`} ref={elemRef}>
        {images.map((item,idx) => (
            <div key={idx} className="rounded-3xl overflow-hidden mb-2 md:mb-3" >
                <img
                    src={item.src.medium}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                />
            </div>
        ))}
    </div>
    </>
}