import React from 'react'
import ReactStars from 'react-stars';
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import Sidepanel from './Sidepanel';

const DoctorDetails = () => {
  const location = useLocation();
  const { name, avgRating, hospital, specialty, photo, totalRating } = location.state;

  const [tab, settab] = useState('about')

  return (
    <section>
      <div className="container max-w-[1070px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            {/* ----- Doctor image and details outer box ---------- */}
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10">
              <figure className='max-w-[220px] max-h-[220px] lg:max-w-[250px] lg:max-h-[250px]'>
                <img src={photo} alt="Doctor image" />
              </figure>
              {/* -----Doctor name and details outer ----- */}
              <div className="flex flex-col items-center lg:items-start">
                {/* ---Specialization--- */}
                <span className="bg-[#CCF0F3] text-irisBlueColor py-2 px-4 lg:py-2
                text-[18px] leading-5 lg:leading-7 font-semibold rounded">{specialty}
                </span>
                {/* -----Name------ */}
                <h3 className="text-headingColor text-[25px] leading-9 mt-3 font-bold">{name}</h3>
                {/* -----Rating outer ------ */}
                <div className="flex items-center justify-between gap-[6px]">
                  <ReactStars
                    count={5} // Number of stars
                    size={30}
                    value={4.8}
                    edit={false}
                    color1={'grey'} // Inactive star color
                    color2={'gold'} // Active star color
                  />
                  <span className="text-[16px] mt-2 leading-5 lg:leading-7 font-semibold text-headingColor">{avgRating}</span>
                  <span className="text-[16px] mt-2 leading-5 lg:leading-7 font-semibold text-textColor">({totalRating})</span>
                </div>

              </div>

            </div>
            {/* ----- Doctor image and details ends ---------- */}
            {/* -----------About Feedback heading------------- */}
            <div className="mt-[30px] lg:mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => settab('about')}
                className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[19px] leading-7 text-headingColor font-semibold`}>About
              </button>
              <button
                onClick={() => settab('feedback')}
                className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[19px] leading-7 text-headingColor font-semibold`}>Feedback
              </button>
            </div>
            {/* -----------About Feedback heading ends------------- */}
            {/* -----------About------------- */}
            <div className="mt-[30px]">
              {tab === 'about' ? <DoctorAbout name={name} Specialty={specialty} /> : <Feedback totalRating={totalRating} averageRating={avgRating} />}
            </div>
          </div>

          <div>
            <Sidepanel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails