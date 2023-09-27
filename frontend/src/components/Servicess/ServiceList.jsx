import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from '../../assets/data/services'

const ServiceList = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[25px] mt-[30px]
    lg:mt-[40px]'>
            {
                services.map((item, key) => (
                    <ServiceCard item={item} key={key} />
                ))
            }
        </div>
    )
}

export default ServiceList