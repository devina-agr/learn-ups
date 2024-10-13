import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Footer = () => {
    return (
        <div className='flex p-5 max-md:p-3 bottom-0 left-0 w-full'>
            <div className="bg-[#8A9FD2] w-full rounded-2xl p-4 h-[240px] max-sm:h-[260px] flex justify-between relative text-white flex-col sm:flex-row">

                <div className="flex flex-col justify-between font-medium">

                    <img src="/jsm-logo.png" alt="" className=' max-w-10' />
                    <div>
                        <div className="text-3xl font-bold mb-1">
                            Connect with us
                        </div>
                        <div className="flex flex-col gap-1">
                            <a href='https://discord.com/invite/YN9ZGjXdXK' target='_blank' rel="noreferrer" className="flex items-center gap-2 rounded-full bg-violet-600 w-fit px-4 py-1 cursor-pointer hover:bg-violet-700 duration-200">
                                Discord <Icon icon="simple-icons:discord" />
                            </a>
                            <a href='https://github.com/ElixirTechCommunity' target='_blank' rel="noreferrer" className="flex items-center gap-2 rounded-full bg-gray-900 w-fit px-4 py-1 cursor-pointer hover:bg-gray-700 duration-200">
                                Github <Icon icon="mdi:github" />
                            </a>
                        </div>
                    </div>

                    <div className='max-sm:mt-4'>
                        Copyright &copy; 2024 Elixir Tech Community
                    </div>

                </div>

                <a href='https://github.com/Kinshu-Learner/' target="_blank" className="flex gap-2 items-center absolute bottom-4 right-6 font-medium text-md bg-[#FF8485] rounded-full px-4 py-1">
                    Made with Love by GFG <Icon icon="il:heart" className='mt-1 text-xl' />
                </a>
            </div>
        </div>
    )
}

export default Footer
