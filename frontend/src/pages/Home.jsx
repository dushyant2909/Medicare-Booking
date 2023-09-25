import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'

const Home = () => {
  return (
    <>
      {/* ---------- Hero Section Outer ------------- */}
      <section className='hero__section py-[30px] 2xl:h-[800px]'>
        <div className="container lg:px-[125px] flex flex-col lg:flex-row gap-[60px] lg:gap-[90px] items-center justify-between">
          {/* ---------Hero Content Left part----------- */}
          <div>
            {/* ----------- Hero content headings----------- */}
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor
                  font-[800] md:text-[60px] md:leading-[70px]">Empowering Your Health & Wellness Journey</h1>
              <p className="text__para">
                Experience world-class care like never before. Our state-of-the-art facilities and expert medical staff are here to cater to your needs. From routine check-ups to specialized treatments, we offer comprehensive healthcare services designed to keep you in the best of health.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="btn">Book an Appointment</button>
              </div>
            </div>

            {/* -------Hero Counter--------- */}
            <div className="mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">30+</h2>
                <span className="w-[95px] h-2 bg-yellowColor rounded-full block mt-[-4px]"></span>
                <p className="text__para font-semibold">Decades of Experience</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">15+</h2>
                <span className="w-[95px] h-2 bg-purpleColor rounded-full block mt-[-4px]"></span>
                <p className="text__para font-semibold">Clinic Locations</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">100%</h2>
                <span className="w-[95px] h-2 bg-irisBlueColor rounded-full block mt-[-4px]"></span>
                <p className="text__para font-semibold">Patient Delight</p>
              </div>
            </div>
          </div>

          {/* ----------Hero Content Images (Right part) -------- */}
          <div className="flex justify-center gap-10 lg:mb-20">
            <div className="">
              <img src={heroImg01} alt="Doctor avatar" className='w-full h-full' />
            </div>
            <div className="flex flex-col justify-center">
              <img src={heroImg02} alt="" className='w-full mb-[30px]' />
              <img src={heroImg03} alt="" className='w-full' />
            </div>
          </div>
        </div>
      </section>
      {/* ----------Hero Section ends---------- */}

      {/* --------- Another hero part starts ----------- */}
      <section className='lg:pt-10 '>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Elevating Healthcare Excellence</h2>
            <p className="text__para text-center font-semibold">
              We believe that your health is your most valuable asset, and we treat it with utmost care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[40px]">
            <div className="py-2 lg:py-0 px-5 flex flex-col justify-center items-center ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[20px]">
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-3 text-center">
                  World-class care for everyone. Explore our accomplished team of doctors, each specializing in various fields of medicine.
                </p>
                <Link to={'/doctors'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                mt-[20px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>

            <div className="py-2 lg:py-0 px-5 flex flex-col justify-center items-center ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[20px]">
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Discover our healing centers</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-3 text-center">
                  We offer comprehensive healthcare services, ensuring you can access a wide range of medical specialties all under one roof.
                </p>
                <Link to={'/doctors'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                mt-[20px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>

            <div className="py-2 lg:py-0 px-5 flex flex-col justify-center items-center ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[20px]">
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book an Appointment</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-3 text-center">
                  Ensure your well-being with an appointment at our world-class healthcare center. Explore our expert medical team today
                </p>
                <Link to={'/doctors'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                mt-[20px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>
      {/* --------- Section ends ----------- */}

      {/* ----------About Section---------- */}
      <About />

      {/* --------- Services Section -------- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center text-semibold">"Providing unparalleled healthcare to all, our health system offers world-class care."</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home