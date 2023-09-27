import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className=''>
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between gap-[70px]">
                    <div className="flex lg:w-[380px] lg:h-[380px] justify-center relative">
                        <img src={aboutImg} alt="About pic" className='w-full' />
                        <div className="absolute z-20 w-[270px] md:w-[350px] bottom-[-90px] lg:bottom-[-120px]">
                            <img src={aboutCardImg} alt="Card image" />
                        </div>
                    </div>

                    <div className="lg:w-3/5 flex flex-col justify-center mt-3 lg:mt-0">
                        <h2 className="heading">Proud to be one of the best in the nation!</h2>
                        <p className="text__para">
                            For an impressive three decades running, U.S. News & World Report has consistently hailed us as one of the
                            finest public hospitals in the nation, proudly securing the coveted #1 spot in Texas.
                        </p>
                        <p className="text__para">
                            We aim for our best every single day, focusing on our patients' needs without dwelling on past achievements.
                            Instead, we look ahead to what we can achieve tomorrow.
                        </p>
                        <Link to={'/'} className='mt-3 flex items-center justify-center lg:justify-start'>
                            <button className='btn' >Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About