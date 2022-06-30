import React, { useState } from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import { Link } from 'react-scroll'

const Nav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)



  return (
    <div className='w-full absolute left-0 top-0 py-4'>
        {/* container */}
        <div className='w-full flex items-center justify-between text-[#F1FAEE] px-4'>
            <div>
                <h2 className='text-3xl font-bold'>Babu<span className='text-[#E63946]'>.</span></h2>
            </div>

            <div className='hidden md:flex'>
                <ul className='flex'>
                    <Link to='hero' smooth={true}><li className='m-4 cursor-pointer hover:border-b-2 hover:border-[#e63946]'>Home</li></Link>
                    <Link to='about' smooth={true}><li className='m-4 cursor-pointer hover:border-b-2 hover:border-[#e63946]'>About</li></Link>
                    <Link to='projects' smooth={true}><li className='m-4 cursor-pointer hover:border-b-2 hover:border-[#e63946]'>Projects</li></Link>
                    <Link to='contact' smooth={true}><li className='m-4 cursor-pointer hover:border-b-2 hover:border-[#e63946]'>Contact</li></Link>
                </ul>
            </div>

            {/* mobile menu toggler */}
            <div className='fixed right-[2rem] text-2xl text-[#F1FAEE] cursor-pointer md:hidden z-[200000]' onClick={handleNav}>
                {!nav ?  <AiOutlineBars /> : <IoMdClose />}
            </div>

            {/* mobile menu */}
            <div className={!nav ? 'hidden' : 'flex w-[60%] pt-[100px] right-0 top-0 h-screen bg-[#ffffff54] backdrop-blur justify-center items-center fixed md:hidden z-[1000]'}>
                <ul className='flex text-black flex-col w-full h-full items-start pl-6'>
                    <li className='m-4'>Home</li>
                    <li className='m-4'>About</li>
                    <li className='m-4'>Projects</li>
                    <li className='m-4'>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav