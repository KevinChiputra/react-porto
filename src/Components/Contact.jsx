import React, { useState } from 'react'

const Contact = () => {
  
  const [valid, setValid] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  
  const checkValid = (event) =>{
    setValid(event.target.value);
  }
  const checkEmail = (event) =>{
    setEmail(event.target.value);
  }
  const checkName = (event) =>{
    setName(event.target.value);
  }



  return (
    <div name="contact" className='w-full bg-[#03001C] flex justify-center items-center p-4 md:h-[110vh]'>
        
        <form method='POST' action="https://getform.io/f/0bfc82b4-3977-427f-8b3e-6828890e3fe4" className='flex flex-col max-w-[600px] w-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#01CC8F] text-[#ccd6f6]'>Contact</p>
                <p className='text-[#8892b0] py-8'>// Contact me through form below | email: chiputrakevin@gmail.com.</p>
            </div>
                
            <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] p-2 rounded-sm' value={name} onChange={checkName}/>
            <input type="email" placeholder='Email' name='Email' className='my-4 p-2 bg-[#ccd6f6] rounded-sm' value={email} onChange={checkEmail}/>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='bg-[#ccd6f6] p-2 rounded-sm' value={valid} onChange={checkValid}></textarea>
            
            {!valid || !email || !name ?
            <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex justify-center items-center rounded-sm opacity-50 cursor-not-allowed' type='submit' disabled>Let's Connect</button>
            : <button className='text-white border-2 hover:bg-[#01cc8f] hover:border-[#01cc8f] px-4 py-3 my-8 mx-auto flex justify-center items-center rounded-sm' type='submit'>Let's Connect</button>}

        </form>

    </div>
  )
}

export default Contact