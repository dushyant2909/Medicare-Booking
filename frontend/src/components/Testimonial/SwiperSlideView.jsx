import React from 'react'
import patientAvatar from '../../assets/images/patient-avatar.png'
import ReactStars from 'react-stars';

const SwiperSlideVisible = ({ name }) => {
    return (
        <div className="p-5 rounded-[10px] shadow-sm bg-slate-50 border">
            <div className="flex items-center gap-[13px]">
                <img src={patientAvatar} alt="" />
                <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        {name}
                    </h4>
                    <div className="flex items-center gap-[2px]">
                        <ReactStars
                            count={5}
                            value={3}
                            edit={false}
                            color1='grey'
                            color2='gold'
                        />
                    </div>
                </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                "I have taken medical services from them. They treat so well and
                they are providing the best medical services."
            </p>
        </div>
    )
}

export default SwiperSlideVisible