import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#03001C] text-[#CCD6F6]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* Parent div */}
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#01CC8F]'>About</p>
                </div>
                <div></div>
            </div>
                
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#8892B0]'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, <span className='text-[#01cc8f]'>Kevin Chiputra</span> here, nice to meet you.</p>
                </div>
                <div>
                    <p>
                    Hello, I'm a committed student at Bina Nusantara University named Kevin Chiputra. My scholastic experience has been heavily influenced by the intriguing fields of frontend programming and UI/UX. I have discovered the ideal setting at Bina Nusantara University, a thriving academic community, to cultivate my interest and develop my abilities in these fascinating subjects. Enrolling in specialized classes that provide me a thorough grasp of user interface and user experience design is one method I actively pursue my passion in UI/UX. I've been able to learn the intricate details of making user-friendly, aesthetically pleasing, and highly useful interfaces thanks to these courses, and I fully welcome the creative difficulties they provide.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About