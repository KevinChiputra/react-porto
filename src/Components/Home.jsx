import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import {Typewriter, Cursor} from 'react-simple-typewriter'
import self from '../assets/MySelf.jpg'

const Home = () => {
  return (
    <div name='home' className='bg-[#03001C] w-full h-screen flex px-4'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
          <p className='text-[#ccd6f6] sm:text-2xl'>Hi, My name is</p>
          <h1 className='text-4xl md:text-7xl font-bold text-[#ccd6f6]'>Kevin Chiputra</h1>
          <h2 className='text-4xl md:text-7xl font-bold text-[#ccd6f6]'>I'm a University Student that love <span className='text-[#01cc8f]'><Typewriter words={['Coding and Designing']} loop='false'/></span></h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a University student that love learning new stuff such as coding and designing in UI/UX. My specialist is in UI/UX cause I choose UI/UX as my speciality in College, but I also love web development in frontend.</p>

          <div>
            <button className=' text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#01cc8f] hover:border-[#01cc8f]'>
              <Link to="work" smooth={true} duration={500} className='flex justify-center items-center'>
                  <p>View Work</p> 
                  <span>
                    <HiArrowNarrowRight className='ml-3'/>
                  </span>
                </Link>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home