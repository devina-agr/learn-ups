import React from 'react'

const Front = () => {
  return (
    <div>
      <header className='flex items-center justify-between border-b-2 border-black pb-2 w-full h-16'>
        <div className='flex relative'>
          <img 
            src='https://avatars.githubusercontent.com/u/110742087?s=200&v=4' 
            alt="Elixir Logo"
            width="70"
            height="80" 
          />
          <h1 className='text-4xl font-bold m-0 -ml-4 mt-3'>ElixirTechCommunity</h1>
        </div>
        <button className='bg-black rounded-full text-white mr-5 font-semibold justify-between w-60 h-10 mt-2 flex items-center'>
          <span className="inline-block w-2 h-2 mb-1 bg-white rounded-full ml-3 "></span>
          <span className="-mt-1">ADD RESOURCE</span> 
          <span className="inline-block w-2 h-2 mb-1 bg-white rounded-full mr-3 "></span>
        </button>
      </header>
      <hr className='border border-gray-300 mb-4' />
    </div>
  )
}

export default Front
