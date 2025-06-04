import React from "react";
const Shoecard = ({imgurl,changebigshoeimage,bigshoeimg}) => {
    console.log(imgurl);
    const handleclick = () => {
          if(bigshoeimg !== imgurl.bigShoe){
            changebigshoeimage(imgurl.bigShoe)
          }
    } 
 return (
    <div className={`border-2 rounded-xl ${bigshoeimg === imgurl.bigShoe ? 'border-red-400' : 'border-transparent'}
    cursor-pointer transition-all duration-500 max-sm:flex-1`}
    onClick={handleclick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-6 bg-white-900">
        <img src={imgurl.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain"/>
      </div>
    </div>
  )
}
export default Shoecard