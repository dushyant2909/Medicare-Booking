import React from 'react'
import { services } from '../assets/data/services'
import ServiceCard from '../components/Servicess/ServiceCard'

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[25px]'>
          {
            services.map((item, key) => (
              <ServiceCard item={item} key={key} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services