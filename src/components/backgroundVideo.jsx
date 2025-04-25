import { useEffect, useRef } from 'react'

import video from "../assets/video/bg_video.mp4"

function BgVideo(){

const vidRef = useRef()
useEffect(() => {vidRef.current.play(); }, [])

    return(
        <div className="w-full h-full fixed top-0 left-0 flex -z-1 hidden md:flex">
          <video ref={vidRef} autoPlay loop playsInline muted className='md:w-[60%] w-[100%] m-auto'>
            <source src={video} type='video/mp4'/>
          </video>
        </div>
    )
}

export default BgVideo