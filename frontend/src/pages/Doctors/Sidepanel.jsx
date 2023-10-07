import React from 'react'

const Sidepanel = () => {
    return (
        <div className='shadow-panelShadow p-3 border lg:p-5 rounded-md'>
            <div className="flex items-center justify-between">
                <div className="text-[16px] leading-7 lg:text-[20px] lg:leading-8 mt-0 text-textColor font-semibold">Ticket Price</div>
                <span className="text-[16px] leading-7 lg:text-[20px] lg:leading-8 text-headingColor font-bold">500 ₹</span>
            </div>

            <div className="mt-[10px]">
                <p className="text-[16px] lg:text-[20px] text-headingColor mt-0 font-semibold">
                    Available Time Slots:
                </p>

                <ul className="mt-2">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[16px] leading-6 text-textColor font-semibold">Sunday</p>
                        <p className="text-[16px] leading-6 text-textColor font-semibold">4:00PM - 6:00PM</p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[16px] leading-6 text-textColor font-semibold">Tuesday</p>
                        <p className="text-[16px] leading-6 text-textColor font-semibold">4:00PM - 6:00PM</p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[16px] leading-6 text-textColor font-semibold">Wednesday</p>
                        <p className="text-[16px] leading-6 text-textColor font-semibold">4:00PM - 6:00PM</p>
                    </li>
                </ul>

                <div >
                    <button className='btn rounded-md w-full'>Book Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default Sidepanel