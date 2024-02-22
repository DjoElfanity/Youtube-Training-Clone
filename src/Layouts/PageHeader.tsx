import React from 'react'
import { MenuIcon } from 'lucide-react'
import { Button } from '../Components/Button'
import Logo from '../assets/Logo.png'


function PageHeader() {
  return (
    <div className='flex gap-10 lg:gap-20 
    justify-between
    '>
        <div className='
        flex 
        gap-4 items-center
        flex-shrink-0
        '>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>

            <a href="/">
            <img src={Logo} className='h-6' />
            </a>
            
        </div>

        <div>Section2</div>
        <div>Section3</div>


    </div>
  )
}

export default PageHeader