import React from 'react'

const Front = () => {
  return (
    <div>
      <header className='flex items-center justify-between border-b-[3px] border-black w-full max-w-[1400px] h-[53px] mx-auto left-[12px] '>
        <div className='flex relative'>
          <img 
            src='https://s3-alpha-sig.figma.com/img/3ea6/9436/213871b61866cc1489d2d0b49efc57a5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pkhAztGHKETEz0l3tHE6k51dqwMKSWcQav~Mvss0~yk1G7zyFNfUz2walrYaCy9ykSac6EIjur3bjr9nRy2MDJwKecYgb6yxlxtu-Smxlq4MzCr~XyvqQhX9pVi5NwybMzAYim3gNfv14srDKS5HtcqjSKfitC7Hcs7KrcZIp-bmlePRGEyNZRDYFm1YYZCDEsOa0XjLXhnTO7LAmBxTgo2nstlTPtciqApm~SNBYH-1Z9zDwhpfzs17eYc6tEiNfnkTx0bG0NiqXbGsOs-NA2PPFdVjtmel87wS9h7g2nUI4ql7zBydV~9cEPzn-cozUKboKjR6p6-jhgAdBVjKBQ__' 
            alt="Elixir Logo"
            width="38px"
            height="38px" 
            top="7px"
            left="2px"
          />
          <h1 className='font-inter text-[24px] font-semibold leading-[29.05px] text-left absolute w-[358px] h-[29.81px] top-[11px] left-[40px] mt-[-10px] '>
            ElixirTechCommunity
          </h1>
        </div>
        <button className='bg-black rounded-[60px] text-white mr-5 font-semibold justify-between w-[224px] h-[38px] top-[6px] left-[1112]  flex items-center mt-[-1px]'>
          <span className="inline-block w-2 h-2 mb-1 bg-white rounded-full ml-3 "></span>
          <span className="-mt-1">ADD RESOURCE</span> 
          <span className="inline-block w-2 h-2 mb-1 bg-white rounded-full mr-3 "></span>
        </button>
      </header>
    </div>
  )
}

export default Front
