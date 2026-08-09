import { Button } from "../buttons/Button"

export const Categories = function Categories({ label, className, cat, handleclick, active }) {
  return <>

    {cat.map((elem, id) => <Button className={`${active == elem.toLowerCase() ? "bg-black text-white" : "bg-white text-black"} px-4 py-2 shadow-(--shadow-thin-1) ${active != elem.toLowerCase() ? 'hover:bg-orange-600/20' : ''} ${className}`} key={id} text={elem} onclick={() => { handleclick?.((prev) => { return { ...prev, [label]: elem.toLowerCase() } }); }}></Button>)}

  </>
};
