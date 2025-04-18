import { useEffect, useRef } from 'react'

import '../assets/styles/Home.css'
import video from "../assets/video/bg_video.mp4"

function Home() {
  const vidRef = useRef()
  useEffect(() => {vidRef.current.play(); }, [])

  return (
    <main className='w-full h-full'>
      <div className="w-full h-full absolute top-0 left-0 flex z-0">
        <video ref={vidRef} autoPlay loop playsInline muted className='w-[60%] m-auto'>
          <source src={video} type='video/mp4'/>
        </video>
      </div>
      <div className="home_text absolute w-fit h-[30vh] right-0 z-1 font-hahmlet p-8 flex flex-col items-end justify-between">
        <div>
          <p className='w-full text-lg text-end'>Heureuse de pouvoir vous dire que..</p>
          <h2 className="w-full text-3xl text-end">Je suis Julie, développeuse web junior.<br/>Bienvenue sur mon portfolio.</h2>
        </div>
        <a href="/a-propos" className='btn_enter px-4 py-2 h-[3em] w-1/4 text-black font-semibold text-center content-center rounded-4xl transition-all duration-400 ease-in-out'>Entrer <i className="fa-solid fa-arrow-right-long fa-sm"></i></a>
      </div>
    </main>
  )

}

export default Home
