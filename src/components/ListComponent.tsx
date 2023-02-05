import { List, ThemeIcon } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { BsLaptop, BsUiRadios, BsUiRadiosGrid } from 'react-icons/bs'
import { FaLaptopCode } from 'react-icons/fa'
import { MdSettingsApplications } from 'react-icons/md'

const ListComponent = () => {
    const router = useRouter()

  return (
    <div>
          <h1 className="text-lg font-bold">SOFTWARE TOOLS</h1>

<div className="mt-6">
      <List spacing="sm" size="sm" c="black" center>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <MdSettingsApplications size={20} />
            </ThemeIcon>
          }
          onClick={() => router.push('/services/software-development')}
        >
          Software Development 
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <BsUiRadios size={20} />
            </ThemeIcon>
          }
          onClick={() => router.push('/services/ux-design')}
        >
          UI/UX Design
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <BsLaptop size={20} />
            </ThemeIcon>
          }
          onClick={() => router.push('/services/it-consulting')}
        >
          IT Consulting
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <FaLaptopCode size={20} />
            </ThemeIcon>
          }
          onClick={() => router.push('/services/web-development')}
        >
          Web Development
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <BsUiRadiosGrid size={20} />
            </ThemeIcon>
          }
          onClick={() => router.push('/services/mobile-app-development')}
        >
         Mobile App Development
        </List.Item>
       
      </List>
    </div>
    </div>
  )
}

export default ListComponent