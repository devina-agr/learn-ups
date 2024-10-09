import React from "react";

const Tittlebox =()=>{
       return(
        <div>
            <div className='w-[98%] h-[3px] bg-[#BBBBBB] mx-auto item '></div>
            <div className="bg-[#fde288] rounded-2xl p-4 m-5 flex justify-between relative text-black flex-col sm:flex-col min-w-fit">
            <div className="md:flex justify-between font-black justify-between text-7xl gap-10  space-x-4 ">
               <div className="flex  item-center h-fit">
                <h1 className="resourses-text font-size-adjust h-fit ml-5 ">RE</h1>
               <p className="text ">SOURCES RELATED TO ALL TOPICS</p>
                </div> 
                 <div className="flex box-border  p-4 w-fit bg-[#FF8485] m4 rounded-2xl ps-3px pe-3px right-6  center">
                 <h1 className=" button1 font-size-adjust h-30 ">100+</h1>
                 </div>
               
                </div>       
        </div>
        
        </div>
    ) ;
}
export default Tittlebox;