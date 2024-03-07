import React, {useEffect, useState} from 'react'
import Signup from '../signup/Signup'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../../Components/alert/Alert';


const Login = ({baseUrl}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState(false);

  const user = localStorage.getItem('user')

  useEffect(() => {
    if(user){
      console.log('true');
      navigate('/')
    }

  },[])


  const handleSignIn = async (e) => {
    e.preventDefault()

    // validating the login of the user
    if(email === '' || password === ''){
      setAlert('Please fill in all fields')
      setAlertType('error')
      console.log('gettttout')
    } else {
      setLoading(true)

      // making an API call or request
      const res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
          'Accept':"application/json"
        },
        body: JSON.stringify({email:email, password:password})
      })

      // requested data from the api
      const data = await res.json()

      // checking if the data displays 
      console.log(res, data);

      
      if(res) setLoading(false)

      // Error message if response is not okay
      if(!res.ok){
        setAlert(data.message)
        setAlertType('error')
      }
      
      if(res.ok) {
        window.location.href = '/'
        localStorage.setItem('user', JSON.stringify(data))
      }
    }

  }



  return (
    <div className='relative top-[60%] left-[50%] translate-x-[-50%] translate-y-[40%] h-[400px] w-[800px] bg-[#030712] mt-[70px] p-[40px]' >
      <div className='flex-col items-center justify-between gap-[150px]'>
        <div>
          <h1 className='text-white mb-[10px] text-2xl'>E-mail</h1>
          <input className='w-[100%] h-[40px] rounded-md pl-[10px]' type="email" placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}} />
        </div>

        <div className='mt-[20px]'>
          <h1 className='text-white mb-[10px] text-2xl'>Password</h1>
          <input className='w-[100%] h-[40px] rounded-md pl-[10px]' type="password" placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}} />
        </div>
      </div>

      {
        loading ? 
          <button className='w-[100%] text-xl text-white bg-[white] mt-[40px] rounded-md py-[10px] bg-gradient-to-r from-[#5E6068] via-[#292C35] to-[#0A0E18] cursor-not-allowed'>LOADING....</button> 
          : 
          <button onClick={handleSignIn} className='w-[100%] text-xl text-white bg-[white] mt-[40px] rounded-md py-[10px] bg-gradient-to-r from-[#5E6068] via-[#292C35] to-[#0A0E18]'>LOGIN</button>
      }


      <h1 className='text-white items-center text-center mt-[30px]'>Not logged in? <Link className='underline text-blue-300' to='/signup'>Signup</Link></h1>

      {
        alert && <Alert alertType={alertType} alert={alert} setAlert={setAlert} />
      }
    </div>
  )
}

export default Login