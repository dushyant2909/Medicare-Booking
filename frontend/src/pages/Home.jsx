import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import faqImg from '../assets/images/faq-img.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Servicess/ServiceList'
import DoctorsList from '../components/Doctors/DoctorsList'
import FAQlist from '../components/FAQ/faqList'
import Testimonial from '../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
      {/* ---------- Hero Section Outer ------------- */}
      <section className='hero__section 2xl:h-[800px]'>
        <div className="container flex flex-col lg:flex-row gap-[60px] lg:gap-[90px] items-center justify-between">
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
      <section>
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
          <div className="xl:w-[470px] lg:mt-5 mx-auto">
            <h2 className="heading text-center text-[46px]">Our Medical Services</h2>
            <p className="text__para text-center text-semibold">"Providing unparalleled healthcare to all, our health system offers world-class care."</p>
          </div>

          <ServiceList />

        </div>
      </section>

      {/* --------- Feature Section --------- */}
      <section>
        <div className="container">
          <div className="flex items-center gap-10 justify-between flex-col lg:flex-row">
            {/* ----------- Feature Content ---------- */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual treatment <br /> anytime.
              </h2>

              <ul className='pl-4'>
                <li className="text__para">
                  1. Schedule appointments directly.
                </li>
                <li className="text__para">
                  2. Discover Your Physician's Office.
                </li>
                <li className="text__para">
                  3. Explore Physicians Accepting New Patients - Book Your Appointment Online.
                </li>
              </ul>

              <div className='flex justify-center lg:justify-start'>
                <div>
                  <Link to={'/'} className='mx-auto'>
                    <button className="btn">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* ----------- Feature Image ------------- */}
            <div className="relative px-4 z-10 w-[380px] h-[380px] flex justify-end">
              <img src={featureImg} alt="doctor image" />
            </div>
          </div>
        </div>
      </section>
      {/* --------- Feature Section Ends ------ */}

      {/* --------- Our Great doctors ----------- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great Doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorsList />
        </div>
      </section>
      {/* ---------- Doctors ends ------------ */}

      {/* ---------- FAQ Section ------------- */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-5">
            <div className="w-1/2  hidden md:flex justify-center items-start">
              <img src={faqImg} className='h-[500px]' alt="Frequently asked question section image" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="!text-[30px] lg:!text-[35px] heading text-center lg:text-start">Frequently Asked Questions by Our Beloved Patients</h2>
              <FAQlist />
            </div>
          </div>
        </div>
      </section>
      {/* ---------- FAQ Section Ends ------------- */}

      {/* ---------- Testimonial ------------- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our Patients say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* ------------- Testimonial ends --------- */}

    </>
  )
}

export default Home