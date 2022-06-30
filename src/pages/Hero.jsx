import React from 'react'
import { motion } from "framer-motion"

const Hero = () => {
  const MyContainer = {
    BeforeFade : {
      y: 200,
      opacity: 0
    },
    AfterFade : {
      y : 0,
      opacity: 1
    }
  }
  return (
    <div className='w-full h-screen text-[#F1FAEE]' name='hero'>
        <div className='flex flex-col items-center justify-end pb-[70px] md:pb-0 md:justify-center h-full w-full'>
            <motion.div 
            variants={MyContainer}
            initial='BeforeFade'
            animate='AfterFade'
            transition={{
              duration: .5,
              type: 'spring',
              stiffness: 90
            }}
            className='px-4 md:px-[100px] lg:px-[200px] md:items-start w-full'>
              <p className='text-[#E63946] text-xl'>hello, my name is</p>
              <h2 className='text-2xl md:text-3xl text-bold tracking-wider text-[#c5deee]'>Kennedy Babu</h2>
              <h1 className='text-3xl md:text-5xl  text-[#A8DADC]'>I'm a fullstack Developer.</h1>
              <p className='text-xl py-4 md:max-w-[800px]'>
                I'm a web developer with an art and design background, keen on details and enhancing the user experience.
              </p>

            </motion.div>
        </div>
    </div>
  )
}

export default Hero