import React from 'react'
import { motion } from "framer-motion"
import {FaAngular, FaPython, FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiDjango,SiFlask} from 'react-icons/si'



const About = () => {
    const MyContainer = {
        BeforeFade : {
          opacity: 0
        },
        AfterFade : {
          opacity: 1
        }
      }
  return (
    <div className='w-full h-full md:h-[80vh] lg:h-screen' name='about'>
        {/* container */}
        <div className='w-full h-full flex flex-col items-center justify-center'>   
            <motion.div variants={MyContainer} initial='BeforeFade' animate='AfterFade' className='text-[#F1FAEE]  px-4 md:px-[100px] w-full lg:px-[200px]'>
                <p className='underline py-4 tracking-wide underline-offset-4 text-2xl'>About</p>
                <p className='lg:max-w-[800px] md:text-xl'>I'm Kennedy Babu, a Nairobi based fullstack developer.
                    I have a diverse range of skills ranging from design to HTML, 
                    CSS, all the way to React and MySQL. I have knowledge in the life cycle of development, starting from design to deployment.
                </p>
            </motion.div>
            <div className='grid grid-cols-2  md:grid-cols-3 w-full px-[100px] py-8 text-[#A8DADC]'>
                <div className='flex flex-col items-center py-4 cursor-pointer'>
                    <FaAngular className='text-[45px] text-[#A8DADC] hover:text-red-500 hover:scale-110'/>
                    <p>Angular</p>
                </div>    
                <div className='flex flex-col items-center py-4 cursor-pointer'>
                    <FaPython className='text-[45px] text-[#A8DADC] hover:scale-110' />    
                    <p>Python</p>
                </div>          
                <div className='flex flex-col items-center py-4 cursor-pointer'>
                    <IoLogoJavascript className='text-[45px] text-[#A8DADC] hover:scale-110'/>
                    <p>JavaScript</p>
                </div>  
                <div className='flex flex-col items-center py-4 cursor-pointer'>
                    <FaReact className='text-[45px] text-[#A8DADC] hover:scale-110'/>
                    <p>React JS</p>
                </div>
                <div className='flex flex-col items-center py-4 cursor-pointer'>
                    <SiDjango className='text-[45px] text-[#A8DADC] hover:scale-110'/>
                    <p>Django</p>
                </div>
                <div className='flex flex-col items-center py-4 cursor-pointer'>
                    <SiFlask className='text-[45px] text-[#A8DADC] hover:scale-110'/>
                    <p>Flask</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About