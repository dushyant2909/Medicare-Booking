import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'

const Home = () => {
  return (
    <>
      {/* ----------Hero Section------------- */}
      <section className='hero__section pt-[30px] 2xl:h-[800px]'>
        <div className="container lg:px-[125px]">
          <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[90px] items-center justify-between">
            {/* ---------Hero Content----------- */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor
                  font-[800] md:text-[60px] md:leading-[70px]">We help patients live a healthy, longer life.</h1>
                <p className="text__para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolores cumque nulla excepturi sapiente sint ad temporibus minima repellat voluptatibus quibusdam, eos cum at doloribus totam libero illo dolorum. Sit?</p>
                <div className="flex justify-center lg:justify-start">
                  <button className="btn">Book an Appointment</button>
                </div>
              </div>

              {/* -------Hero Counter--------- */}
              <div className="mt-[30px] lg:mt-[40px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">30+</h2>
                  <span className="w-[95px] h-2 bg-yellowColor rounded-full block mt-[-4px]"></span>
                  <p className="text__para font-semibold">Years of Experience</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">15+</h2>
                  <span className="w-[95px] h-2 bg-purpleColor rounded-full block mt-[-4px]"></span>
                  <p className="text__para font-semibold">Clinic Locations</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">100%</h2>
                  <span className="w-[95px] h-2 bg-irisBlueColor rounded-full block mt-[-4px]"></span>
                  <p className="text__para font-semibold">Patient Satisfaction</p>
                </div>
              </div>



            </div>

            {/* ----------Hero Content Images-------- */}
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
        </div>
      </section>
      {/* ----------Hero Section ends---------- */}


    </>
  )
}

export default Home