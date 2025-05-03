import BgVideo from "../components/backgroundVideo"
import Button from "../components/animatedBtn"
import video from "../assets/video/earth_video.mp4"


function Error(){
    
    return(
        <main className="h-[90vh] w-[90vw] flex flex-wrap place-content-center-safe">
            <BgVideo video={video}/>
            <section className="w-full md:w-[60vw] h-fit text-indigo-50 md:mt-16 font-roboto font-bold text-indigo-50 flex flex-col items-center">
                <div className="m-auto opacity-50 hover:opacity-100 w-fit h-fit transition-all duration-200 ease-in-out mb-8 lg:mb-16">
                    <h2 className="text-[5em] lg:text-[20em] -mb-4 lg:-mb-20">404</h2>
                    <p className="text-lg lg:text-5xl">Page inexistante</p>
                </div>
                <Button link="/" innerText="Retourner à la page d'accueil" icon={<i className="fa-solid fa-rotate-left"></i>}/>
            </section>
        </main>
    )
}

export default Error