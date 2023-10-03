import React from 'react'
import { faqs } from '../../assets/data/faqs'
import FAQitem from './FAQitem'

const FAQlist = () => {
    return (
        <ul className='mt-5'>
            {faqs.map((item, index) => <FAQitem item={item} key={index} />)}
        </ul>
    )
}

export default FAQlist