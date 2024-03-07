import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";




const AboutUs = () => {
  return (
    <div className='py-[70px] px-[20px] bg-[#D1D5DB] h-[88.5vh]'>
      <div>
        <h1 className='text-3xl text-center'>Welcome to <span>DevDose</span></h1>
        <p className='py-[15px]'>Hey there! I'm <span className='text-xl'>OneTrueHomie</span>, the voice behind this corner of the internet. With a passion for all things tech, I'm thrilled to be your guide through the ever-evolving world of technology. Armed with a keen eye for design and a love for clean, efficient code, I specialize in bringing digital visions to life. and have a passion for blogging. Here, we dive into the latest trends, share coding tips, and explore innovative breakthroughs that make our digital lives exciting..</p>
      </div>
      
      <div>
        <h1 className='text-3xl text-center'>Why <span>DevDose</span></h1>
        <p className='py-[15px]'>This blog is your go-to resource for staying in the know about the tech landscape. I believe in demystifying complex concepts and aim to make technology accessible for everyone.Whether you're a coding enthusiast looking for the latest frameworks or a tech-curious individual interested in future innovations, there's something here for you.</p>
      </div>

      <div>
        <p className='text-xl text-center'>Let's connect!</p>
      </div>

      <div className='py-[15px]'>
        <p className='text-center'>I love hearing from you. Share your thoughts with me on {<FaTwitter className='inline'/>} and {<FaLinkedin className='inline'/>} and let's journey together into the fascinating world of tech. Thanks for stopping by!</p>
      </div>

      <div className='text-center gap-[20px] text-2xl mt-[20px] flex items-center'>
        <FaGithub />
        <FaTwitter />
        <FaWhatsapp />
      </div>


    </div>
  )
}

export default AboutUs