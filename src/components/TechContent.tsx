
import { techies } from '@/data/tech'
import { ActionIcon, SimpleGrid } from '@mantine/core'
import React from 'react'



const TechContent = () => {
  return (
    <>
      <SimpleGrid cols={3} spacing="xl">
       {
        techies.map((tech, i) => (
            <>
              <div key={i} className="w-full px-6 py-4 min-h-[200px] service-card main-card flex flex-col items-center justify-center relative overflow-hidden">
                  {tech.icon}
                  <h3 className='text-lg font-bold text-[#121212CC] mt-4'>{tech.name}</h3>
                <div className='bg-[#1974FB] absolute -bottom-[100%] w-full h-full flex items-center justify-center overlay px-8'>
                   <p className='text-white text-[14px] font-medium opacity-0'>{tech.description}</p>
                </div>
              </div>
            </>
        ))
       }
      </SimpleGrid>
    </>
  )
}

export default TechContent