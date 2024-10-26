import React from 'react'

const HomePage = () => {
    return (
        <div className="container">
            <div className="wrapper text-center mt-[100px]">
                <p className='text-blue-400 font-semibold text-xl mb-[50px]'>WHY CHOOSE US</p>
                <h1 className='text-black mb-[100px] text-5xl font-bold'>Reason to Choose Merida</h1>
                <div className="items">

                    <div className="row-one flex items-center justify-around gap-5 mt-6">
                        <div className="box-1  bg-gray-100 p-10 pb-[80px] rounded-l-3xl text-left">
                            <h3 className='font-bold text-xl mb-5'> Extensive Knlowdge</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>

                        <div className="box-1  bg-gray-100 p-10  pb-[80px] rounded-l-3xl text-left">
                            <h3 className='font-bold text-xl mb-5'> Extensive Knlowdge</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>

                    <div className="row-two flex items-center justify-evenly gap-5 mt-6">
                        <div className="box-1  bg-gray-100 p-10 pb-[80px] rounded-l-3xl text-left">
                            <h3 className='font-bold text-xl mb-5'> Extensive Knlowdge</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <img src="./avatar.png" alt="" />
                        <div className="box-1  bg-gray-100 p-10  pb-[80px] rounded-l-3xl text-left">
                            <h3 className='font-bold text-xl mb-5'> Extensive Knlowdge</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>

                    <div className="row-one flex items-center justify-around gap-5 mt-6">
                        <div className="box-1  bg-gray-100 p-10 pb-[80px] rounded-l-3xl text-left">
                            <h3 className='font-bold text-xl mb-5'> Extensive Knlowdge</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>

                        <div className="box-1  bg-gray-100 p-10  pb-[80px] rounded-l-3xl text-left">
                            <h3 className='font-bold text-xl mb-5'> Extensive Knlowdge</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage