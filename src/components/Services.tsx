import React from 'react'
import { GlobalUseContext } from '../utils/Context'

export const Services:React.FC = () => {
    const { oneHour, thirtyMinutes } = GlobalUseContext()

    const services =[
        {
            id:"1",
            time:"30Min",
            price: thirtyMinutes,
        },
        {
            id:"2",
            time:"1hr",
            price: oneHour,
        },
      ]


  return (
    <div>
        <h1 className='text-center text-3xl pt-5 md:pb-16'>Our Services</h1>
        <div className="md:flex justify-around items-center">
         {services.map((service)=>(
               <div className="shadow-md my-6 " key={service.id}>
               <div className='w-full'>
                   <img src="/11062b_d00559f81ba84b968b58859c3dbdf4aa~mv2_d_3762_2508_s_4_2.webp" alt="" className='object-cover w-full' />
               </div>
               <div className="px-5">
                   <h2 className='py-2 font-bold text-lg'>Initial Consultation</h2>
                   <p className='py-2'>Time to make your immigration more green</p>
                   <div className="h-1 bg-gray-400"></div>
                   <div className="flex justify-between items-center py-5">
                       <p>{service.time}</p>
                       <p>US ${service.price}</p>
                   </div>
                   <button className='w-full bg-[#DB00A1] py-3 text-white my-4 '>Book Now</button>
               </div>
           </div>
         ))}
           
            {/* <div className="shadow-md my-6 ">
                <div className='w-full'>
                    <img src="/11062b_d00559f81ba84b968b58859c3dbdf4aa~mv2_d_3762_2508_s_4_2.webp" alt="" className='object-cover w-full' />
                </div>
                <div className="px-5">
                    <h2 className='py-2 text-bold'>Initial Consultation</h2>
                    <p className='py-2'>Time to make your immigration more green</p>
                    <div className="h-1 bg-gray-400"></div>
                    <div className="flex justify-between items-center py-5">
                        <p>1hr</p>
                        <p>US $151</p>
                    </div>
                    <button className='w-full bg-[#DB00A1] py-3 text-white my-4 '>Book Now</button>
                </div>
            </div> */}
           
        </div>
    </div>
  )
}


