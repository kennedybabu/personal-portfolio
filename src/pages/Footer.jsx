import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-[30vh] bg-[#1f3d50]' name='footer'>
        {/* container */}
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <h3 className='text-[#c5deee] text-xl text-bold'>Kennedy Babu</h3>
            <div className='text-[#c5deee] w-full flex items-center justify-center'>
                <a href="https://www.facebook.com/chustballer/" target='_blank' rel='noreferrer'><FaFacebook className='text-2xl m-4 hover:scale-120'/></a>
                <a href="https://twitter.com/BadBoyYardie_" target='_blank' rel='noreferrer'><BsTwitter className='text-2xl m-4 hover:scale-120'/></a>
                <a href="https://github.com/kennedybabu" target='_blank' rel='noreferrer'><AiOutlineGithub className='text-2xl m-4 hover:scale-120'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer