import React from 'react'
import ReactStars from 'react-stars';
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const { avgRating, hospital, name, photo, specialty, totalPatients, totalRating } = doctor;
  // Define different star sizes for mobile and laptop
  const mobileStarSize = 25;
  const laptopStarSize = 30;

  // Use the useMediaQuery hook to determine the screen size
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the breakpoint as needed

  const DoctorDetails = {
    name,
    avgRating,
    hospital,
    photo,
    specialty,
    totalRating
  }

  return (
    <Link to={'/doctors/1'} state={DoctorDetails}>
      <div className='flex flex-col justify-center items-center p-5'>
        <div>
          <img src={photo} className='w-full' alt="doctor image" />
        </div>
        {/* ----- Doctor name and details outer ----- */}
        <div className="flex w-full px-3 flex-col items-center justify-center">
          <h2 className="text-[23px] leading-[30px] lg:text-[26px] lg:leading-9 
      text-headingColor font-[700] text-center mt-2">{name}</h2>

          <div className="flex w-full mt-1 justify-between">
            <div className="bg-[#ccf0f3] text-irisBlueColor px-2 lg:px-3 py-1 text-[16px] lg:leading-7 font-semibold">{specialty}</div>
            <div className="text-[16px] font-semibold mt-1 text-headingColor">+{totalPatients} patients</div>
          </div>
          <div className="w-full leading-7 mt-2 font-semibold text-textColor">
            -At {hospital}
          </div>

        </div>

      </div>
    </Link>
  )
}

export default DoctorCard
