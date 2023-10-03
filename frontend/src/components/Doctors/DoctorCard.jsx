import React from 'react'
import ReactStars from 'react-stars';
import { useMediaQuery } from 'react-responsive'

const DoctorCard = ({ doctor }) => {
  const { avgRating, hospital, name, photo, specialty, totalPatients, totalRating } = doctor;
  // Define different star sizes for mobile and laptop
  const mobileStarSize = 25;
  const laptopStarSize = 30;

  // Use the useMediaQuery hook to determine the screen size
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the breakpoint as needed


  return (
    <div className='flex flex-col justify-center items-center p-5'>
      <div>
        <img src={photo} className='w-full' alt="doctor image" />
      </div>
      {/* ----- Doctor name and details outer ----- */}
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="text-[23px] leading-[30px] lg:text-[26px] lg:leading-9 
      text-headingColor font-[700] text-center mt-2">{name}</h2>

        <div className="flex w-full mt-1 justify-between">
          <div className="bg-[#ccf0f3] text-irisBlueColor px-2 lg:px-3 py-1 text-[16px] lg:leading-7 font-semibold">{specialty}</div>
          <div className="text-[16px] font-semibold mt-1 text-headingColor">+{totalPatients} patients</div>
        </div>

        <div className="flex w-full items-center gap-2">
          <span className="">
            <ReactStars
              count={5} // Number of stars
              size={isMobile ? mobileStarSize : laptopStarSize} // Size of the stars
              value={avgRating}
              edit={false}
              color1={'grey'} // Inactive star color
              color2={'gold'} // Active star color
            />
          </span>
          <span className="mt-1 text-headingColor text-[16px] font-semibold">
            {avgRating}
          </span>
          <span className="mt-1 text-headingColor text-[16px] font-semibold">
            ({totalRating})
          </span>
        </div>
        <div className="w-full leading-7 text-textColor">
          -At {hospital}
        </div>

      </div>

    </div>
  )
}

export default DoctorCard
