import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>{/*z-index property controls the vertical stacking order of elements. It determines which elements appear "on top" of others when they overlap. */}
        <nav className='flex justify-between items-center max-container'>{/*max-container present in index.css */}
            <a href="/">
            <img src={headerLogo} alt="Logo"
            width={130}
            height={29} 
            />
            </a>
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'> {/*max-lg is media queries at min-width:1024px */}
                {navLinks.map((item) => (
                   <li key={item.label}>
                    <a
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-gray-500 hover:underline"
                    >
                        {item.label}
                    </a>

                   </li> 
                ))}
            </ul>
            <button className='flex border p-1 px-2 rounded  focus:ring-2 bg-red-400 text-white border-red-400 max-lg:ml-14 max-lg:text-xs'>Sign IN</button>
            <div className='profile flex border  border-black rounded-full'></div>
            <img src={hamburger} alt="hamburger" width={25} height={25} className='hidden max-lg:block cursor-pointer'/>            
        </nav>
    </header>
  )
}

export default Nav