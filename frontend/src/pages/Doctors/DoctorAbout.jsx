import React from 'react'
import { FormatDate } from '../../utils/FormatDate'

const DoctorAbout = ({ name, Specialty }) => {
    return (
        <div>
            <div>
                <h3 className="text-[22px] leaing-[30px] text-headingColor font-semibold items-center gap-2">
                    About of
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9"> {name}</span>
                </h3>
                <p className="text__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ea, cupiditate, nostrum illo sint adipisci quia deleniti quo consectetur dolorem harum! Et fugiat sint natus mollitia hic aut porro voluptates!
                </p>
            </div>

            <div className="mt-10">
                <h3 className="text-[22px] leading-[30px] text-headingColor font-semibold">
                    Education
                </h3>

                <ul className="pt-4 md:p-2">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 md:gap-5 mb-[30px]">
                        <div className='flex flex-col gap-2'>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                {FormatDate('06-12-2008')} - {FormatDate('09-20-2011')}
                            </span>
                            <p className="text-[16px] leading-4 font-medium text-textColor">
                                PHD in {Specialty}
                            </p>
                        </div>
                        <p className="text-[16px] leading-4 font-medium text-textColor">
                            New Apollo Hospital, New York
                        </p>
                    </li>

                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 md:gap-5 mb-[30px]">
                        <div className='flex flex-col gap-2'>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                {FormatDate('04-12-2012')}</span>
                            <p className="text-[16px] leading-4 font-medium text-textColor">
                                Mastery in Medicine
                            </p>
                        </div>
                        <p className="text-[16px] leading-4 font-medium text-textColor">
                            New Apollo Hospital, New York
                        </p>
                    </li>
                </ul>
            </div>

            <div className="mt-2">
                <h3 className="text-[22px] leading-[30px] text-headingColor font-semibold">
                    Experience
                </h3>

                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-2">
                    <li className="flex flex-col gap-2 p-3 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {FormatDate('06-12-2008')}
                        </span>

                        <p className="text-[16px] leading-4 font-medium text-headingColor ">
                            Sr. Surgeon
                        </p>
                        <p className="text-[16px] leading-4 font-medium text-textColor">
                            New Apollo Hospital, New York
                        </p>
                    </li>

                    <li className="flex flex-col gap-2 p-3 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {FormatDate('06-12-2008')}
                        </span>

                        <p className="text-[16px] leading-4 font-medium text-headingColor">
                            Sr. Surgeon
                        </p>
                        <p className="text-[16px] leading-4 font-medium text-textColor">
                            New Apollo Hospital, New York
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DoctorAbout