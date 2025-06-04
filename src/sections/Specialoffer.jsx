import React from 'react'
import {offer} from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'

const Specialoffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-red-400">Special</span> Offer Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your expreience with unbeatable deals.
          From th selections to incredible savings, we offer unparalled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Navigate a realm of possibility designed to fullfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundcolor="bg-white" bordercolor="border-gray-500" textcolor="text-gray-700" />
        </div>
      </div>
    </section>
  )
}

export default Specialoffer