import React from 'react'
import star from "../assets/icons/star.svg"

const Productcard = ({imgURL,name,price,rating}) => {
  return (
    <div className='flex flex-1 flex-col w-full  max-sm:w-full'>
        <img src={imgURL} alt={name} 
            className="w-[280px] h-[280px]"
        />

        <div className='mt-8 flex justify-start gap-2.5 ml-3'>
            <img src={star} alt="rating" width={15} height={15}/>
            <p className='font-montserrat text-xl leading-normal text-gray-400'>{rating}</p>
        </div>
        <h3 className='ml-3 text-xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='ml-3 font-semibold font-montserrat text-red-400 text-2lx leading-normal '>{price}</p>
    </div>
  )
}

export default Productcard