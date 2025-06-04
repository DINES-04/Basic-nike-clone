import React from 'react'
import Button from "../components/Button"
import { shoe8 } from '../assets/images'

const Superquality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"> We Provide You
          <span className="text-red-400"> Super</span>
          <br />
          <span className="text-red-400">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our metriculously crafted footwear is designed to elevate your experience, 
          providing you with unmatched quality, innovation, and a touch of elegence.</p>
        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellance ensures your satisfaction</p>
        <div className='mt-11'>
          <Button label="View Details"/>
        </div>
      </div>

      <div className='flex flex-1  justify-start items-center'>
        <img src={shoe8} alt="shoe8" width={570} height={522} className='objext-conatin'/>
      </div>

    </section>
  )
}

export default Superquality