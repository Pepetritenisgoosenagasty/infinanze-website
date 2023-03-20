import { Collapse } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import ListComponent from './ListComponent'
import { ListMobileComponent, TechMobileComponent } from './MobileListContent'
import { styles } from './MobileStyle'

const MobileNav = ({pageWrapId, outerContainerId}: any) => {
    const [content, setContent] = useState(false)
    const [tech, setTech] = useState(false)
    const [opened, { toggle }] = useDisclosure(false);
  return (
    <div>
        <Menu right styles={styles} pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
        <div className='m-auto flex flex-col'>
        <Link id="home" className="menu-item" href="/">Home</Link>
        <Link id="about" className="menu-item" href="/about">About</Link>
        <ListMobileComponent />
        
        <a id="technology" className="menu-item flex items-center" href="#" onClick={toggle}>Technologies  {opened ? (<BsChevronUp/>) : (<BsChevronDown />)}</a>
        <Collapse in={opened} transitionDuration={500} transitionTimingFunction="linear">
        <TechMobileComponent />
        </Collapse>
        <Link id="contact" className="menu-item" href="/contact">Contact</Link>
        </div>
      </Menu>
    </div>
  )
}

export default MobileNav