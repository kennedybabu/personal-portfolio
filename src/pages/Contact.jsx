import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen relative flex items-center justify-center px-4 lg:px-[100px]' name='contact'>
        <h2 className='text-3xl text-[#A8DADC] absolute left-1/2 -translate-x-1/2  top-[50px] border-b-2 border-[#E63946]'>contact</h2>
        {/* container */}
            <form action="https://getform.io/f/e639ca92-130a-4202-a0da-8146834acb5f"  method='POST' className='max-w-[600px] w-full flex flex-col mx-auto'>
               <input type="text" placeholder='Name' className='p-2 bg-[#ccd1e0]'/>
               <input type="email" name="email" className='my-2 p-2 bg-[#ccd1e0]' placeholder='Email' />
               <textarea name="" cols="30" rows="10" placeholder='Message' className='p-2 bg-[#ccd1e0]'></textarea>
                <button className='p-2 border-2 border-white px-4 py-2 mx-auto my-4 text-[#ccd1e0] hover:bg-[#E63946] hover:border-[#E63946]'>send me an email</button>
            </form>
    </div>
  )
}

export default Contact