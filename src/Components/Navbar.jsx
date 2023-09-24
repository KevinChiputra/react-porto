import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {TbBrandLinktree} from 'react-icons/tb'
import {AiOutlineInstagram} from 'react-icons/ai'
import {Link} from 'react-scroll'
import logo from '../assets/Logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 text-[#ccd6f6] bg-[#03001C] md:px-16'>
        {/* Logo */}
        <div>
            <img src={logo} alt="Logo image" className='h-10'/>
        </div>

        {/* Menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}  >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}  >
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skill" smooth={true} duration={500}  >
                        Skill
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}  >
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}  >
                        Contact
                    </Link>
                </li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to="about" smooth={true} duration={500} onClick={handleClick}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to="skill" smooth={true} duration={500} onClick={handleClick}>
                    Skill
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to="work" smooth={true} duration={500} onClick={handleClick}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
                    Contact
                </Link>
            </li>
            {/* Social media */}
            <li className='py-6 text-xl flex gap-8'>
                <a className='flex justify-between items-center w-full text-gray-3 gap-2' href="https://www.linkedin.com/in/kevin-chiputra-310b8b223/">
                    <FaLinkedin size={40}/>
                </a>
                <a className='flex justify-between items-center w-full text-gray-3' href="https://github.com/KevinChiputra">
                    <FaGithub size={40}/>
                </a>
                <a className='flex justify-between items-center w-full text-gray-3' href="https://www.instagram.com/kevin.chiputra/">
                    <AiOutlineInstagram size={40}/>
                </a>
                <a className='flex justify-between items-center w-full text-gray-3' href="https://linktr.ee/KevinChiputra">
                    <TbBrandLinktree size={40}/>
                </a>
            </li>

        </ul>


        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-[#ccd6f6]'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-3' href="https://www.linkedin.com/in/kevin-chiputra-310b8b223/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#2b3035]'>
                    <a className='flex justify-between items-center w-full text-gray-3' href="https://github.com/KevinChiputra">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#de6666]'>
                    <a className='flex justify-between items-center w-full text-gray-3' href="https://www.instagram.com/kevin.chiputra/">
                        Instagram <AiOutlineInstagram size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#254f1a]'>
                    <a className='flex justify-between items-center w-full text-gray-3' href="https://linktr.ee/KevinChiputra">
                        Linktree <TbBrandLinktree size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

