import React, { useEffect, useState } from 'react'
import Alert from '../../Components/alert/Alert';
import { useNavigate } from 'react-router-dom';

const Signup = ({baseUrl}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false)

  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState(false);

  const navigate = useNavigate()

  const user = localStorage.getItem('user')
  console.log(user)

  useEffect(() => {
    if(!user){
      console.log('true');
      navigate('/signup');
    }
  },[])




  const handleSignUp = async (e) => {
    e.preventDefault()
    if(email === '' || username === '' || password === '' || confirmPassword === ''){
      setAlert('Please fill in all fields')
      setAlertType('error')
    } else if (password !== confirmPassword){
      setAlert('Passwords do not match')
      setAlertType('error')
    } else {
      setLoading(true)
      const res = await fetch(`${baseUrl}/signup`, {
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'Accept':"application/json"
        },
        body: JSON.stringify({email:email, username:username, password:password})
      })
      const data = await res.json()
      console.log(res, data);

      
      if(res) setLoading(false)
      if(!res.ok){
        setAlert(data.message)
        setAlertType('error')
      }

      if(res.ok){
        localStorage.setItem('user', JSON.stringify(data))
        navigate("/")
      }

    }
  }



  return (
    <form className='bg-[#D1D5DB] h-[88.5vh]' onSubmit={handleSignUp}>
      <div className='relative top-[10%] left-[50%] translate-x-[-50%] translate-y-[10%] h-[600px] w-[700px] bg-[#030712] p-[40px]' >
        <div className='flex-col items-center justify-between gap-[150px]'>
          <div>
            <h1 className='text-white mb-[10px] text-2xl'>E-mail</h1>
            <input className='w-[100%] h-[40px] rounded-md pl-[10px] border-none outline-none' type="email" placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}} />
          </div>

          <div className='mt-[20px]'>
            <h1 className='text-white mb-[10px] text-2xl'>Username</h1>
            <input className='w-[100%] h-[40px] rounded-md pl-[10px] outline-none' type="text" placeholder='Username' onChange={(e) => {setUsername(e.target.value)}} />
          </div>

          <div className='mt-[20px]'>
            <h1 className='text-white mb-[10px] text-2xl'>Password</h1>
            <input className='w-[100%] h-[40px] rounded-md pl-[10px] outline-none' type="password" placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}}/>
          </div>

          <div className='mt-[20px]'>
            <h1 className='text-white mb-[10px] text-2xl'> Confirm Password</h1>
            <input className='w-[100%] h-[40px] rounded-md pl-[10px] outline-none' type="password" placeholder='Confirm Password' onChange={(e) => {setConfirmPassword(e.target.value)}}/>
          </div>
        </div>
        
        {
          loading ? 
            <button className='w-[100%] text-xl text-white bg-[white] mt-[40px] rounded-md py-[10px] bg-gradient-to-r from-[#5E6068] via-[#292C35] to-[#0A0E18] cursor-not-allowed'>LOADING....</button> 
            : 
          <button type='submit' className='w-[100%] text-xl text-white bg-[white] mt-[40px] rounded-md py-[10px] bg-gradient-to-r from-[#5E6068] via-[#292C35] to-[#0A0E18]'>SIGN UP</button>
        }


      </div>

      {
        alert && <Alert alertType={alertType} alert={alert} setAlert={setAlert} />
      }
    </form>
  )
}

export default Signup