import React, { useState } from 'react'
import ruangguru from '../assets/Ruangguru.png'
import batiktrus from '../assets/batiktrus.png'
import FilmFlow from '../assets/Thumbnail.png'
import Mtgraph from '../assets/MTgraph.png'
import ARC from '../assets/ARC.png'


const Works = () => {
  return (
    // 
    <div name='work' className='w-full md:h-[110vh] text-[#CCD6F6] bg-[#03001C]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#01CC8F] text-[#ccd6f6]'>Works</p>
                <p className='text-[#8892b0] py-4'>//Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/* grid item */}
                <a href="https://heavy-celsius-487.notion.site/FilmFlow-cf7cdee9ddac4450949515033034838a?pvs=4" >

                <div style={{backgroundImage: `url(${FilmFlow})`}} 
                className='shadow-lg shadow-[#01CC8F] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                            <p>FilmFlow</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://heavy-celsius-487.notion.site/FilmFlow-cf7cdee9ddac4450949515033034838a?pvs=4" >
                                <button className='text-center rounded-lg px-8 py-2 m-2 bg-white text-[#8892b0] font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                </a>
                
                <a href="https://heavy-celsius-487.notion.site/Landing-Page-dan-login-sign-up-ruangguru-7bb14ebaa4d9499ab59c949cb181291a?pvs=4" >
                <div style={{backgroundImage: `url(${ruangguru})`}} 
                className='shadow-lg shadow-[#01CC8F] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                            <p>Ruangguru</p>
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://heavy-celsius-487.notion.site/Landing-Page-dan-login-sign-up-ruangguru-7bb14ebaa4d9499ab59c949cb181291a?pvs=4" >
                                <button className='text-center rounded-lg px-8 py-2 m-2 bg-white text-[#8892b0] font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                </a>

                <a href="https://heavy-celsius-487.notion.site/Batik-Trusmi-Redesign-ecc9b903c865431490c11e341e31bc88?pvs=4" >
                <div style={{backgroundImage: `url(${batiktrus})`}} 
                className='shadow-lg shadow-[#01CC8F] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                            <p>Batik Trusmi</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://heavy-celsius-487.notion.site/Batik-Trusmi-Redesign-ecc9b903c865431490c11e341e31bc88?pvs=4" >
                                <button className='text-center rounded-lg px-8 py-2 m-2 bg-white text-[#8892b0] font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                </a>

                <a href="https://heavy-celsius-487.notion.site/HCI-Finnal-Project-e8778897e03a4fb18e93e51209e3fe4b?pvs=4" >
                <div style={{backgroundImage: `url(${Mtgraph})`}} 
                className='shadow-lg shadow-[#01CC8F] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                            <p>MTgraph</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://heavy-celsius-487.notion.site/HCI-Finnal-Project-e8778897e03a4fb18e93e51209e3fe4b?pvs=4" >
                                <button className='text-center rounded-lg px-8 py-2 m-2 bg-white text-[#8892b0] font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                </a>

                <a href="https://heavy-celsius-487.notion.site/ARC-c8051eea9b704b6ea507517fcf52095b?pvs=4" >
                <div style={{backgroundImage: `url(${ARC})`}} 
                className='shadow-lg shadow-[#01CC8F] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                            <p>ARC</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://heavy-celsius-487.notion.site/ARC-c8051eea9b704b6ea507517fcf52095b?pvs=4" >
                                <button className='text-center rounded-lg px-8 py-2 m-2 bg-white text-[#8892b0] font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                </a>

            </div>            
        </div>
    </div>
  )
}

export default Works