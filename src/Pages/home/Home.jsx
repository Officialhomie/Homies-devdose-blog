import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DateComponent from '../../Components/date/DateComponent'


const Home = () => {
  const user = localStorage.getItem('user')
  // const today = new Date().toISOString().split('T')[0];

  const navigate = useNavigate()

  useEffect(() => {
    if(user){
      console.log('true');
      navigate('/')
    }
  },[])


  const tileArray = [
    {
      Date: "todays",
      Title: "myTitle for today",
      Desc: "What do we have here today"
    },{
      Date: "todays",
      Title: "myTitle for today",
      Desc: "What do we have here today"
    },{
      Date: "todays",
      Title: "myTitle for today",
      Desc: "What do we have here today"
    },{
      Date: "todays",
      Title: "myTitle for today",
      Desc: "What do we have here today"
    },{
      Date: "todays",
      Title: "myTitle for today",
      Desc: "What do we have here today"
    }
  ]


  return (
    <div>
      <div className='flex item-center justify-between px-[70px] py-[10] mt-[10px]'>
        <h1 className='text-3xl'>Blogs</h1>
        <h1 className='text-xl'><DateComponent/></h1>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-[25px] my-[15px] gap-[20px]'>
        {tileArray.map(tile => (
              <div className='bg-[#030712] border rounded-3xl p-[10px]'>
                <h1 className='text-white px-[25px] '>{tile.Date}</h1>

                <div className='px-[40px] py-[15px]'>
                  <h3 className='text-white'>{tile.Title}</h3>
                  <p className='text-white  py-[10px]'>{tile.Desc}</p>
                </div>
              </div>
        ))}
      </div>
    </div>
  )
}

export default Home