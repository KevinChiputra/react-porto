import React from 'react'

// assets
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Figma from '../assets/figma.png'
import Github from '../assets/github.png'



const Skill = () => {
  return (
    <div name='skill' className='bg-[#03001C] text-[#CCD6F6] w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#01CC8F] text-[#ccd6f6]'>Skills</p>
                <p className='text-[#8892b0] py-4'>// These are the tools I use for all of my project</p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center'>
                <div className='shadow-md shadow-[#01CC8F] hover:scale-110 duration-500'>
                    <img src={HTML} alt="HTML Icons" className='w-20 mx-auto'/>
                    <p className='py-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#01CC8F] hover:scale-110 duration-500'>
                    <img src={CSS} alt="HTML Icons" className='w-20 mx-auto'/>
                    <p className='py-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#01CC8F] hover:scale-110 duration-500'>
                    <img src={ReactImg} alt="HTML Icons" className='w-20 mx-auto'/>
                    <p className='py-4'>React JS</p>
                </div>
                <div className='shadow-md shadow-[#01CC8F] hover:scale-110 duration-500'>
                    <img src={Tailwind} alt="HTML Icons" className='w-20 mx-auto'/>
                    <p className='py-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#01CC8F] hover:scale-110 duration-500'>
                    <img src={Figma} alt="HTML Icons" className='w-20 mx-auto'/>
                    <p className='py-4'>Figma</p>
                </div>
                <div className='shadow-md shadow-[#01CC8F] hover:scale-110 duration-500'>
                    <img src={Github} alt="HTML Icons" className='w-20 mx-auto'/>
                    <p className='py-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill