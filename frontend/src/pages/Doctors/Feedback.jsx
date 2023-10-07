import avatar from '../../assets/images/avatar-icon.png'
import { FormatDate } from '../../utils/FormatDate'
import ReactStars from 'react-stars';
import { useState } from 'react';
import FeedbackForm from './FeedbackForm';

const Feedback = ({ totalRating, }) => {

    const [showFeedbackForm, setshowFeedbackForm] = useState(false);

    return (
        <div>
            <div className="mb-[45px]">
                {/*----Page top heading----- */}
                <h4 className="text-[22px] leading-[30px] font-bold text-headingColor mb-[25px]">
                    All Reviews ({totalRating})
                </h4>
                <div className="flex flex-col justify-between gap-3 mb-[20px] border rounded p-2 max-w-[550px]">
                    <div className="flex justify-between">
                        {/* -------------Image and name outer -------- */}
                        <div className="flex items-center gap-3">
                            {/* -------- User image --------- */}
                            <figure
                                className="w-10 h-10 rounded-full">
                                <img src={avatar}
                                    className='w-full'
                                    alt="user image" />
                            </figure>
                            {/* -----------Name & Date outer ---------- */}
                            <div className="flex flex-col items-start justify-center">
                                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">Peter Kumar</h5>
                                <p className="text-[14px] leading-6 text-textColor">
                                    {FormatDate('02-14-2023')}
                                </p>
                            </div>
                        </div>
                        <div>
                            <ReactStars
                                count={5}
                                value={4.2}
                                edit={false}
                                color1='grey'
                                color2='gold'
                            />
                        </div>
                    </div>
                    {/* -----------Review Outer ------------- */}
                    <p className="text-[14px] leading-6 text-textColor font-medium">
                        Great Service, Highly Recommended 👍
                    </p>
                </div>

                {!showFeedbackForm && (<div className="flex justify-center lg:justify-start">
                    <button onClick={() => setshowFeedbackForm(!showFeedbackForm)} className="btn">Give Feedback</button>
                </div>)}
                {showFeedbackForm && <FeedbackForm />}

            </div>
        </div>
    )
}

export default Feedback