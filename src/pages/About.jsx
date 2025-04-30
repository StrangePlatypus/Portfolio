import BgVideo from "../components/backgroundVideo"
import Icon from "../components/icon"
import TextDiv from "../components/textDiv"

import portrait from '../assets/images/portrait.jpg'
import {about} from '../assets/data/about.json'

function About(){
    const softSkillsList = about.softSkillsItems.map((skill, index) => <li key={index}>{skill}</li>)

    const sectionStyle = "w-full font-hahmlet text-indigo-50 font-light flex flex-col md:flex-row md:justify-between items-center lg-gap:auto"
    const reverseSectionStyle = "w-full font-hahmlet text-indigo-50 font-light flex flex-col md:flex-row-reverse md:justify-between items-center lg:gap-auto"
    const iconsDivStyle = "md:w-fit w-full p-2 md:p-8 text-amber-500 grid grid-cols-6 xl:grid-cols-3 md:grid-cols-2 gap-auto md:gap-8 justify-items-center"

    return(
        <main className="w-full h-full">
            <BgVideo />
            <section className="w-[90vw] h-fit md:absolute md:right-0 md:top-0 md:p-[2em] lg:p-[5em] my-8 flex flex-col gap-24 justify-center items-center">

{/** RESUME SECTION */}
                <div className={sectionStyle}>
                    <div className={`w-fit p-8`}>
                        <img src={portrait} alt="Portrait de Julie Poignant" className="rounded-full size-[10em] md:size-[15em] lg:size-[20em]"/>
                    </div>
                    <TextDiv
                        title="À propos de moi"
                        innerText={about.presentation}
                        displayList="hidden"
                    />
                </div>

{/** HARD SKILLS SECTION */}
                <div className={reverseSectionStyle}>
                    <div className = {iconsDivStyle}>
                        <Icon icon = {<i className="fa-brands fa-node-js fa-2xl"></i>}/>
                        <Icon icon = {<i className="fa-brands fa-react fa-2xl"></i>}/>
                        <Icon icon = {<i className="fa-brands fa-js fa-2xl"></i>}/>
                        <Icon icon = {<i className="fa-brands fa-css3 fa-2xl"></i>}/>
                        <Icon icon = {<i className="fa-brands fa-html5 fa-2xl"></i>}/>
                        <Icon icon = {<i className="fa-solid fa-database fa-2xl"></i>}/>
                    </div>
                    <TextDiv
                        title="Hard skills"
                        innerText={about.hardSkills}
                        displayList="hidden"
                    />
                </div>
                

{/** SOFT SKILLS SECTION */}
                <div className={sectionStyle}>
                    <div className={iconsDivStyle}>
                        <Icon icon = {<i className="fa-solid fa-horse-head fa-2xl"></i>}/>
                        <Icon icon = {<i className="fa-solid fa-wrench fa-2xl"></i>}/>
                        <Icon icon = {<i className="fa-solid fa-pencil fa-2xl"></i>}/>
                        <Icon icon = {<i className="fa-solid fa-plane fa-2xl"></i>}/>
                        <Icon icon = {<i className="fa-solid fa-seedling fa-2xl"></i>}/>
                        <Icon icon = {<i className="fa-solid fa-paw fa-2xl"></i>}/>
                    </div>
                    <TextDiv
                        title="Soft skills et loisirs"
                        innerText={about.softSkills}
                        displayList="block"
                        list={softSkillsList}
                    />
                </div>

            </section>
            
        </main>
    )
}

export default About