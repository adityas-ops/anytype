import React from 'react'

function Card({title,src}) {
  return (
    <div className=' flex items-center text-[22px] font-[500]  md3:text-[55px] md3:font-[400]  border border-gray-600 rounded-[96px] h-[48px] md3:h-[96px] py-[6px] px-[16px] md3:px-[32px] mr-[8px] mb-[8px] sm:mr-[12px] sm:mb-[16px] cursor-pointer hover:bg-black transition-colors'>
       {title}
        <img
  className="ml-[8px] md:ml-[16px] w-[28px] md:w-[64px]"
  src={src}
/>

    </div>
  )
}

export default Card