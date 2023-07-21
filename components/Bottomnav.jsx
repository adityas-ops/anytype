import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
function Bottomnav() {
    const [button,setButton] = useState("/")

  return (
    <>
    <div className='flex fixed z-20 left-1/2 -translate-x-1/2 bottom-[5px] md:bottom-[16px] h-[60px] bg-gray-700/40 rounded-[16px] backdrop-blur-[6px]'>
    <Link href="/" className={`${button === "/" ? "active underline-offset-[8px]":""}  px-[2rem] py-[1rem] text-white font-Inter uppercase`} onClick={()=>{
        setButton("/")
    }}>
        What
    </Link>
    <Link href="/why" className={` ${button === "/why" ? "active underline-offset-[8px]":""} px-[2rem] py-[1rem] text-white font-Inter uppercase`}
        onClick={()=>{
            setButton("/why")
        }}
    >
        why
    </Link>
    <Link href="/who" className={` ${button === "/who" ? "active underline-offset-[8px]":""} px-[2rem] py-[1rem] text-white font-Inter uppercase`} onClick={()=>{
        setButton("/who")
    }}>
        who
    </Link>
    </div>
    </>
  )
}

export default Bottomnav