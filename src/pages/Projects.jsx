import Card from "../components/card"
import video from "../assets/video/bg_video.mp4"
import { lazy, Suspense } from 'react'

import {projects} from '../assets/data/projects-data.json'

const LazyVideo = lazy(() => import ('../components/backgroundVideo'))

function Projects(){

    return(
        <main className="w-screen min-h-screen h-full">
            <Suspense fallback={<div>Loading...</div>}>
                <LazyVideo video={video}/>
            </Suspense>
    {/** Shadows on left and right side of the viewport */}
            <div className="hidden md:block z-3 h-[90vh] w-[15vw] absolute top-[10vh] left-0 bg-gradient-to-r from-black/70 to-black/0"></div>
            <div className="hidden md:block z-3 h-[90vh] w-[7vw] lg:w-[10vw] absolute top-[10vh] right-0 bg-gradient-to-l from-black/70 to-black/0"></div>
            <div id='slider_container'>
    {/** In a list, for each existing project in the json file we create a card */}
                <ul id='slider'>
                    {projects.map(({id, title, cover}) =>
                    <Card key={id} id={id} title={title} cover={cover}/>
                    )}
                </ul>
            </div>
        </main>
    )
}

export default Projects