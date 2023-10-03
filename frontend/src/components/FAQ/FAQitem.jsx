import React from 'react'
import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FAQitem = ({ item }) => {
    const [isOpen, setisOpen] = useState(false);

    const toggleAction = () => {
        setisOpen(!isOpen);
    };

    return (
        <div className="px-3 py-2 rounded-[12px] border border-solid 
        border-[#D9DCE2] mb-5 cursor-pointer shadow-md hover:bg-gray-50">
            <div className="flex items-center justify-between gap-5" onClick={toggleAction}>
                <h4 className="text-[16px] leading-7 lg:text-[20px] lg:leading-8 text-headingColor ">{item.question}</h4>
                <div className={`${isOpen && "bg-primaryColor text-white border-none"} w-7 h-7 border
                    border-solid border-[#141F21] rounded flex items-center justify-center`}>
                    {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>

            </div>
            <div className={`overflow-hidden transition-max-h ${isOpen ? 'max-h-[1000px] mt-2' : 'max-h-0 mt-0'} duration-1000 ease-in-out`}>
                <p>{item.content}</p>
            </div>

        </div>
    )
}

export default FAQitem