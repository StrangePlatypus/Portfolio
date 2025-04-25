import Card from "../components/card"
import BgVideo from '../components/backgroundVideo'

import {projects} from '../assets/data/projects-data.json'


function Projects(){

    return(
        <main className='w-full h-full'>
            <BgVideo />
            <div id='slider_container' className="md:absolute md:right-[3vw] md:top-0 w-[90vw] h-full my-8">
                <ul id='slider' className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[3vw] justify-around content-evenly min-h-full">
                    {projects.map(({id, title, cover}) =>
                    <Card key={id} title={title} cover={cover}/>
                    )}
                </ul>
            </div>
        </main>
    )
}

export default Projects