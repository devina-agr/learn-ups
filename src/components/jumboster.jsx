import React from 'react';

const Jumboster = () => {
    return (
        <div>
            <div className='mt-32 ml-5 flex items-center'>
                <div className="w-5 h-5 bg-[#3B7F6C] rounded-full inline-block mr-2"></div>
                <p className='font-inter text-2xl font-extrabold text-[#3B7F6C]'>FROM VISION TO REALITY</p>
            </div>
            <div className='ml-5'>
                <p className='font-inter text-[96px] font-black leading-[80px] tracking[-0.15em]'>UNITING HEARTS FOR <br />STRONGER COMMUNITIES</p>
            </div>
            <div className='ml-5 mt-6 w-[537px] flex items-center border-black border-[5px] h-20 rounded-full'>
                <input
                    type='text'
                    placeholder='Search a Resource...'
                    className=' h-10 outline-none placeholder:text-[32px] font-inter pl-6 pr-4 ml-2 text-3xl' 
                />
                <button className='text-4xl rounded-full bg-[#9EB5EE] text-white w-40 h-16 font-bold font-inter mr-1 pb-1'>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Jumboster;
