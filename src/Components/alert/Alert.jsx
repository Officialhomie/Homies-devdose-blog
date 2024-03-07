import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";


const Alert = ({alertType, alert, setAlert}) => {
  return (
    <div>
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center' style={{ backgroundColor:"rgba(18,18,18, 0.8)" }}>
            <div className='flex-col gap-[40px] border text-center items-center w-[40%] h-[350px] bg-white rounded-lg px-[25px] py-[30px]'>

                {
                    alertType === 'error' ? <ImCancelCircle className='text-7xl text-center inline-flex text-red-700' /> : <FaCheckCircle className='text-7xl text-center inline-flex text-green-700' />
                }

                <p className='mt-[20px] text-xl'>{alert}</p>
                <button className='mt-[30px] text-white bg-red-700 px-[12px] py-[5px] rounded-xl' onClick={() => setAlert(false)}>OK</button>
            </div>
        </div>
    </div>
  )
}

export default Alert
