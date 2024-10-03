import React from 'react'

const Front = () => {
  return (
    <div>
      <header className='flex items-center justify-between w-full py-1'>
        <div className='flex items-start justify-start'>
          <img 
            src='https://s3-alpha-sig.figma.com/img/3ea6/9436/213871b61866cc1489d2d0b49efc57a5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pkhAztGHKETEz0l3tHE6k51dqwMKSWcQav~Mvss0~yk1G7zyFNfUz2walrYaCy9ykSac6EIjur3bjr9nRy2MDJwKecYgb6yxlxtu-Smxlq4MzCr~XyvqQhX9pVi5NwybMzAYim3gNfv14srDKS5HtcqjSKfitC7Hcs7KrcZIp-bmlePRGEyNZRDYFm1YYZCDEsOa0XjLXhnTO7LAmBxTgo2nstlTPtciqApm~SNBYH-1Z9zDwhpfzs17eYc6tEiNfnkTx0bG0NiqXbGsOs-NA2PPFdVjtmel87wS9h7g2nUI4ql7zBydV~9cEPzn-cozUKboKjR6p6-jhgAdBVjKBQ__' 
            alt="Elixir Logo"
            width="38px"
            height="38px" 
          />
          <h1 className='font-inter text-[1.5rem] font-bold'>
            ElixirTechCommunity
          </h1>
        </div>
        <button className='relative bg-black rounded-[60px] text-white font-semibold justify-between flex items-center py-2 px-14 mr-2'>
          <span className="absolute left-6 top-4 w-2 h-2 mb-1 bg-white rounded-full"></span>
          <span className="">ADD RESOURCE</span> 
          <span className="absolute right-6 top-4 w-2 h-2 mb-1 bg-white rounded-full"></span>
        </button>
      </header>
      <div className='w-[98%] h-[3px] bg-[#BBBBBB] mx-auto'></div>
    </div>
  )
}

export default Front