import React from 'react'
import Netflix from '../assets/netflix.png'
import Bad from '../assets/bad.png'
import Travel from '../assets/travel.png'
import Space from '../assets/space.png'
import Sunny from '../assets/sunny.png'
import Sneakers  from '../assets/sneakers.png'


const Projects = () => {

  return (
    <div className='relative w-full h-full lg:h-screen flex items-center justify-center flex-col' name='projects'>
        <p className='my-8 md:my-0 md:absolute left-[100px] md:left-8 lg:left-[200px] top-[50px] text-3xl border-b-2 border-[#E63946] text-[#c5deee]'>some of my projects</p>
        <div className='grid md:grid-cols-2 px-8 lg:px-[200px] gap-[2rem] h-full'>
            <div className='projects-container'>
                <div className='group project-tile span-2 relative hover:scale-105 duration-150' whileHover={{ scale: 1.09 }}>
                  <div className='overlay hidden group-hover:flex flex-col'>
                    <h2 className='text-3xl text-bold text-[#c5deee]'>Netflix Clone</h2>
                    <a href="https://my-netflix-clone-react.web.app/" rel='noreferrer'  target='_blank' className='text-[#003049] rounded-[30px] py-2 px-4 bg-slate-200'>view</a>
                  </div>
                  <img src={Netflix} alt=""   className='cursor-pointer hover:scale-105 duration-200'/>
                </div>
                <div className='group project-tile relative hover:scale-105 duration-150'>
                    <div className='group overlay hidden group-hover:flex flex-col'>
                      <h2 className='text-3xl text-bold text-[#c5deee]'>Breaking Bad</h2>
                    <a href="https://breaking-bad-cast-react.web.app/" target='_blank' rel='noreferrer' className='text-[#003049] rounded-[30px] py-2 px-4 bg-slate-200'>view</a>
                  </div>
                  <img src={Bad} alt=""  whileHover={{ scale: 1.09 }} className='cursor-pointer hover:scale-105 duration-200'/>
                </div>
                <div className='group project-tile relative hover:scale-105 duration-150'>
                    <div className='group overlay hidden group-hover:flex flex-col'>
                      <h2 className='text-3xl text-bold text-[#c5deee]'>Travel Landing Page</h2>
                      <a href="https://beaches-travels.web.app/" target='_blank' rel='noreferrer' className='text-[#003049] rounded-[30px] py-2 px-4 bg-slate-200'>view</a>
                  </div>
                  <img src={Travel} alt=""  whileHover={{ scale: 1.09 }} className='cursor-pointer hover:scale-105 duration-200'/>
                </div>
            </div>
            <div className='projects-container'>
                <div className='group project-tile relative hover:scale-105 duration-150' whileHover={{ scale: 1.09 }}>
                  <div className='overlay hidden group-hover:flex flex-col'>
                    <h2 className='text-3xl text-bold text-[#c5deee]'>Sunnyside Landingpage</h2>
                    <a href="https://sunnyside-react.web.app/" target='_blank' rel='noreferrer' className='text-[#003049] rounded-[30px] py-2 px-4 bg-slate-200'>view</a>
                  </div>
                  <img src={Sunny} alt=""   className='cursor-pointer hover:scale-105 duration-200'/>
                </div>
                <div className='group project-tile relative hover:scale-105 duration-150'>
                  <div className='overlay hidden group-hover:flex flex-col'>
                      <h2 className='text-3xl text-bold text-[#c5deee]'>Sneakers ECommerce</h2>
                    <a href="https://sneakers-ecommerce-duka.herokuapp.com/" target='_blank' rel='noreferrer' className='text-[#003049] rounded-[30px] py-2 px-4 bg-slate-200'>view</a>
                  </div>
                  <img src={Sneakers} alt=""  whileHover={{ scale: 1.09 }} className='cursor-pointer hover:scale-105 duration-200'/>
                </div>
                <div className='group project-tile span-2 relative hover:scale-105 duration-150'>
                    <div className='overlay hidden group-hover:flex flex-col'>
                      <h2 className='text-3xl text-bold text-[#c5deee]'>Space Tourism Site</h2>
                      <a href="https://space-tourism-react.web.app/" rel='noreferrer' target='_blank' className='text-[#003049] rounded-[30px] py-2 px-4 bg-slate-200'>view</a>
                    </div>
                  <img src={Space} alt="space website preview"  whileHover={{ scale: 1.09 }} className='cursor-pointer hover:scale-105 duration-200'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects