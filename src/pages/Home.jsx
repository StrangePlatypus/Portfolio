import BgVideo from '../components/backgroundVideo'
import video from "../assets/video/bg_video.mp4"

import Button from '../components/animatedBtn'

function Home() {

  return (
    <main className='w-full h-[90vh] flex flex-wrap place-content-center-safe'>
      <BgVideo video={video}/>
      <div className="main_text md:absolute w-fit md:max-w-[80vw] md:h-[30vh] md:top-[40vh] md:right-0 font-hahmlet p-8 flex flex-col items-center md:items-end justify-around gap-12 md:gap-2">
          <p className='w-full text-lg md:text-end'>Heureuse de pouvoir vous dire que..</p>
          <h2 className="w-full text-2xl md:text-3xl md:text-end">Je suis Julie, développeuse web junior.<br/>Bienvenue sur mon portfolio.</h2>
          <Button link="/a-propos" innerText="Entrer" icon={<i className="fa-regular fa-circle-right fa-xl"></i>}/>
      </div>
    </main>
  )

}

export default Home
