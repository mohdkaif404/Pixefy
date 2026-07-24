
export function ButtonTwo({ onclick = () => { console.log("somthing clicked!!!") }, children = null, className = "", text ="", classNameInner = "", ...props }) {
    let handleClick = (e) => { onclick?.(e);  }

    return <>
        <button className={`text-sm px-3 py-2 rounded-full bg-[#fcfcfc] shadow-md/15 text-black flex gap-1.5 items-center transition-all cursor-pointer ${className}`} {...props} onClick={handleClick} >{children}{text && <div className={`${classNameInner}`}>{text}</div>}</button>
    </>
}