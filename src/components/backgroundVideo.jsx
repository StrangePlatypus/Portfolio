import { useEffect, useRef } from 'react'

function BgVideo({video}){

// Make the video autoplay on load

const vidRef = useRef()
useEffect(() => {vidRef.current.play(); }, [])

    return(
        <div className="w-full h-full fixed top-0 md:left-0 flex -z-1 flex justify-center">
          <video ref={vidRef} autoPlay loop playsInline muted className='min-w-[1000px] md:w-[60%] m-auto'>
            <source src={video} type='video/mp4'/>
          </video>
        </div>
    )
}

export default BgVideo