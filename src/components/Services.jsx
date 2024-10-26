import React, { useState } from 'react';

const headings = ["EdTech", "E-com", "Real-estate", "Healthcare", "Telecom"];
const descriptions = [
    "EdTech: Lorem ipsum dolor sit amet.",
    "E-com: Lorem ipsum dolor sit amet.",
    "Real-estate: Lorem ipsum dolor sit amet.",
    "Healthcare: Lorem ipsum dolor sit amet.",
    "Telecom: Lorem ipsum dolor sit amet."
];

const Services = () => {
    // State to track the selected heading index
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className="container flex items-center justify-center mb-6 w-[80%] m-auto  flex-row">

            <div className="wrapper bg-gray-200 h-auto w-full p-6 rounded-lg flex flex-row ">

                <div className="list-items w-[50%] bg-gray-600 rounded-lg">
                    <h4 className='text-pink-500 pt-6 pl-6'>We WORK FOR</h4>
                    <p className='text-white text-4xl p-8 font-semibold'>Industries We Served</p>
                    <ul className='p-5 '>
                        {headings.map((heading, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`  cursor-pointer   rounded-lg p-8 ${selectedIndex === index ? 'bg-blue-200' : 'bg-white'
                                    }`}
                            >
                                {heading}
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="item-details mt-4 p-4 bg-white border rounded w-[50%] flex items-center justify-center">
                    {selectedIndex !== null ? (

                        <>
                            <div className='flex flex-col items-center justify-around'>
                                <h1 className='text-black font-bold text-4xl pb-7'>{headings[selectedIndex]}</h1>
                                <hr className='bg-black' />
                                <p>{descriptions[selectedIndex]}</p>
                            </div>
                        </>
                    ) : (
                        <p>Please select a service to see details.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
