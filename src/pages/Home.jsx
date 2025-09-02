import React from 'react'
import Video from '../components/Home/Video'
import Homeherotext from '../components/Home/Homeherotext'
import Homebottomtext from '../components/Home/Homebottomtext'

function Home() {
  return (
    <>
      <div className='w-screen h-screen fixed'>
      <Video />
    </div>
    <div className='relative h-screen w-screen flex flex-col justify-between items-center overflow-hidden'>
      <Homeherotext />
      <Homebottomtext />
    </div>
    </>
    
  )
}

export default Home
