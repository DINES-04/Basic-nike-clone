import React from 'react'

const Button = ({label,iconURL, backgroundcolor, textcolor,bordercolor, fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundcolor? `${backgroundcolor} ${textcolor} ${bordercolor}`: "bg-red-400 text-white border-red-400"
    } rounded-full ${fullwidth && `w-full`}"}`}>
        {label}
         {iconURL && <img src={iconURL} alt="icon" 
        className='ml-2 rounded-full w-5 h-5 '
        />}
    </button>
  )
}

export default Button