import React from 'react'
import ReactStars from 'react-stars';
import { useState } from 'react';

const FeedbackForm = () => {

  const [rating, setrating] = useState(0)
  const [review, setreview] = useState("")

  console.log(review)

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="flex flex-col mb-2">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold">
          How would you rate the overall experience ?<sup className="text-red-600 text-base">*</sup>
        </h3>
        <div className="flex items-center gap-3">
          <ReactStars
            count={5}
            size={25}
            edit={true}
            value={rating}
            half={false}
            color1='grey'
            color2='gold'
            onChange={(newRating) => setrating(newRating)}
          />
          <span className='mt-1'>
            {rating}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-3">
          Share your feedback or suggestions<sup className="text-red-600 text-base">*</sup>
        </h3>
        <div className="flex items-center gap-3">
          <textarea
            className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor
           w-full px-4 py-3 rounded-md'
            rows="4"
            placeholder='Write your message'
            onChange={(event) => setreview(event.target.value)}>

          </textarea>
        </div>
      </div>
      <div className="">
        <button type='submit' className='btn'>Submit Feedback</button>
      </div>
    </form>
  )
}

export default FeedbackForm