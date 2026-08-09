
export function ImageInfo({imageData,category}) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 p-2 shadow-(--shadow-thin-1) bg-white rounded-2xl my-5">
        <div className="p-1"><div className="text-gray-500 text-sm">Dimensions</div><div className="">600 x 500</div></div>
        <div className="p-1"><div className="text-gray-500 text-sm">Category</div><div className="">{category?category.toUpperCase():"All"}</div></div>
        <div className="p-1"><div className="text-gray-500 text-sm">Author</div><div className="">{imageData.photographer||'AI Generated'}</div></div>
        <div className="p-1"><div className="text-gray-500 text-sm">License</div><div className="">Pixefy free</div></div>
     </div>
  )
}

