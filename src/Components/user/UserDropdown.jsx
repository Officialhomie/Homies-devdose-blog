import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom';




const UserDropdown = () => {

  

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
    console.log('Local storage cleared');
    window.location.href = '/'
  }


  return (
    <div className='fixed right-[7%] top-[10%]' >
      <div className='absolute gap-[30px] top-[10%] left-[90%] translate-x-[-50%] h-[170px] w-[200px] bg-[#ccc] p-[15px] border rounded-md ' >
        <div className='flex w-[100%] items-center gap-[35px] cursor-pointer'>
          <FaRegUser  className='text-black text-xl'/>
          <h1 className='text-black text-xl'>Welcome</h1>
        </div>

        <div className='flex w-[100%]  border-b-[3px] border-gray-800 items-center gap-[35px] mt-[15px] pb-[10px] cursor-pointer'>
          <MdDashboard className='text-black text-xl'/>
          <h1 className='text-black text-xl'>Dashboard</h1>
        </div>

        <button onClick={handleLogout} className='block bg-[#fff] rounded-md items-center text-center text-lg w-[100%] py-[10px] mt-[10px]'>Logout</button>
      </div>
    </div>
  )
}

export default UserDropdown