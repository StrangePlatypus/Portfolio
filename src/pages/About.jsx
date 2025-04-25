import BgVideo from "../components/backgroundVideo"
import Icon from "../components/icon"

import portrait from '../assets/images/portrait.jpg'

function About(){

    const sectionStyle = "w-full font-hahmlet text-indigo-50 font-light flex flex-col md:flex-row md:justify-between items-center lg-gap:auto"
    const reverseSectionStyle = "w-full font-hahmlet text-indigo-50 font-light flex flex-col md:flex-row-reverse md:justify-between items-center lg:gap-auto"
    const iconsDivStyle = "md:w-fit w-full p-2 md:p-8 text-amber-500 grid grid-cols-6 xl:grid-cols-3 md:grid-cols-2 gap-auto md:gap-8 justify-items-center"
    const textDivStyle = "xl:w-[55%] md:w-[50%] w-[95%] md:p-8 rounded-3xl bg-black/40 backdrop-blur-lg"

    return(
        <main className="w-full h-full">
            <BgVideo />
            <section className="w-[90vw] h-fit md:absolute md:right-0 md:top-0 md:p-[2em] lg:p-[5em] my-8 flex flex-col gap-24 justify-center items-center">

{/** RESUME SECTION */}
                <div className={sectionStyle}>
                    <div className={`w-fit p-8`}>
                        <img src={portrait} alt="Portrait de Julie Poignant" className="rounded-full size-[10em] md:size-[15em] lg:size-[20em]"/>
                    </div>
                    <div className={textDivStyle}>
                        <h2 className="text-3xl my-8 font-semibold">À propos de moi</h2>
                        <p className="text-sm text-lg">Jeune développeuse web de 28ans, j'ai enfin trouvé ma voie, le métier qui me fait vibrer.<br/><br/>J'ai passé plusieurs années à sillonner la France et divers postes, qui font de moi une personne complète, performante, et capable de s'adapter à tout type de situation.<br/><br/>Etant actuellement à la recherche d'un poste je compte sur vous pour me contacter afin que nous puissions travailler ensembles, main dans la main, afin de créer des solutions innovantes et utiles à tous.</p>
                    </div>
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
                    <div className={textDivStyle}>
                        <h2 className="text-3xl my-8 font-semibold">Hard skills</h2>
                        <p className="text-sm text-lg">Lors de ma formation de Développeur web avec OpenClassrooms, j’ai acquis les bases de JavaScript, Node.js et React. Je maîtrise également HTML5 et CSS3, que j’utilise avec aisance pour créer des interfaces claires et responsives. J’ai aussi eu l’occasion de manipuler une base de données MongoDB dans le cadre de projets pratiques.<br/><br/>En parallèle, j’ai développé le site e-commerce de ma micro-entreprise avec Prestashop. J’ai assuré sa personnalisation graphique ainsi que sa mise en ligne, ce qui m’a permis d’appliquer mes compétences dans un contexte concret et autonome.<br/><br/>Je souhaite désormais consolider mes acquis et découvrir de nouveaux langages et outils. Curieuse et motivée, je suis ouverte à toutes les opportunités qui me permettront de progresser dans le développement web.</p>
                    </div>
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
                    <div className={textDivStyle}>
                        <h2 className="text-3xl my-8 font-semibold">Soft skills et loisirs</h2>
                        <p className="text-sm text-lg">Souvent mises à l'écart, les passions et passes-temps sont pourtant de véritables atouts.<br/>Pour ma part, je pratique :</p>
                        <ul className="text-sm text-lg text-start my-6 lg:px-12 list-disc">
                            <li>L'équitation, qui m'apprend la douceur et la rigueur</li>
                            <li>La mécanique, qui me fait faire beaucoup de recherche et réfléchir à la résolution de problèmes de façon durable</li>
                            <li>Le graphisme, qui fait travailler ma créativité</li>
                            <li>Les voyages, pour découvrir de nouvelles façons de penser</li>
                            <li>Le jardinage, qui apprend la résilience et la patience</li>
                        </ul>
                    </div>
                </div>

            </section>
            
            
        </main>
    )
}

export default About