import React from 'react'
import { reviews } from '../constants'
import Reviews from '../components/Reviews'

const Customerreviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-4xl font-bold text-center'>
        What Our 
        <span className='text-red-400'> Customers </span>
        Says?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear genuine stories from our satisfied customers about their exceptional expreience with us.</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col  gap-14'>
          {reviews.map((review) => (
              <Reviews
                key={review.customerName}
                customerName={review.customerName}
                rating={review.rating}
                imgURL={review.imgURL}
               feedback={review.feedback}
              />
          ))}
      </div>
    </section>
  
  )
}

export default Customerreviews