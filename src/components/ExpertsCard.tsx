import React, { useState } from 'react'
import { BsArrowDownRight, BsArrowUpLeft } from 'react-icons/bs'

const ExpertsCard = ({name}: {name: string}) => {
    const [isHovered, setIsHovered] = useState<Boolean>(false)
  return (
    <div className="bg-white relative w-full h-[180px] rounded-lg  text-[#1974FB] font-[700]  text-[20px] flex items-center justify-center text-center px-10 hover:bg-[#1974FB] hover:text-white  transition ease-in-out delay-150 duration-300 cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    {name}
    <div className="absolute bottom-4 right-4">
     {
      isHovered ? ( <BsArrowDownRight />) : ( <BsArrowUpLeft />)
     }
    </div>
  </div>
  )
}

export default ExpertsCard