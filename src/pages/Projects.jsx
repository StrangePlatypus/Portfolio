import Card from "../components/card"
import BgVideo from '../components/backgroundVideo'

import {projects} from '../assets/data/projects-data.json'


function Projects(){

    return(
        <main className="w-screen min-h-screen h-full">
            <BgVideo />
            <div className="hidden md:block z-3 h-[90vh] w-[15vw] absolute top-[10vh] left-0 bg-gradient-to-r from-black/70 to-black/0"></div>
            <div className="hidden md:block z-3 h-[90vh] w-[7vw] lg:w-[10vw] absolute top-[10vh] right-0 bg-gradient-to-l from-black/70 to-black/0"></div>
            <div id='slider_container'>
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