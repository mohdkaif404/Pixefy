
export function ButtonTwo({ click = () => { console.log("somthing clicked!!!") }, children = null, className = "", text = "Button", classNameInner = "", id, isActive=true, setactive, ...props }) {
    let handleClick = (e) => { setactive?.(id); click?.(e); }

    return <>
        <button className={`text-sm px-3 py-2 rounded-full bg-[#fcfcfc] shadow-md/15 text-black flex gap-1.5 items-center ${className}`} {...props} onClick={handleClick} >{children}{isActive && <div className={`${classNameInner}`}>{text}</div>}</button>
    </>
}