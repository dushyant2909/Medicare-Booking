import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ item }) => {
  const { name, desc } = item;
  return (
    <div className="bg-gray-50 hover:bg-gray-100 cursor-arrow select-none border rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 lg:p-6">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-4">{desc}</p>
        <Link to="/" className="text-blue-500 hover:text-blue-600 flex items-center space-x-2">
          <span>Learn More</span>
          <BsArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
