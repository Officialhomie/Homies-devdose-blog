import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import UserDropdown from '../user/UserDropdown';
 


const Navbar = () => {
  const [show, setShow] = useState(false)

  // const toggleVisibility = () => {
  //   ; 
  // };

  const user = localStorage.getItem('user');

  return (
    <div className='flex justify-between items-center px-[200px] py-[30px] bg-[#030712]'>
      <h1 className='text-white text-4xl'>DevDose</h1>
      <div>
        <ul className='flex gap-[30px] items-center'>
          <li>
            <Link to="/" className='text-white'>Home</Link>
          </li>

          <li>
            <Link to="/about-us" className='text-white'>About Us</Link>
          </li>


          {user ?  
            <li>
              <p><CgProfile className='text-white text-4xl' onClick={() => setShow(!show)}/></p>
            </li> 
            : 
            <li>
              <Link  to="/login"><button className='text-white px-[15px] py-[10px] bg-[#191E24] border rounded'>LOGIN</button></Link>
            </li>}

        </ul>
      </div>
      
      {show && <UserDropdown   />}
      

    </div>
  )
}

export default Navbar