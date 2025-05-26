import { useEffect, useRef } from "react"
import {projects} from '../assets/data/projects-data.json'
import Modal from 'react-modal'
import { useState } from "react"
import Slideshow from "./slideshow"
import TechIcon from "./techIcon"

function Card({id, title, cover}){

    const cardRef = useRef(null)

{/** Styles */}

    const titlesStyle = "lg:font-bold xl:text-lg text-amber-400 my-2"
    const innerTextStyle = "text-sm xl:text-base"
    const listStyle = "text-sm xl:text-base list-disc list-inside"

{/** Function that make the card disappear when it reaches viewport's top */}
    useEffect(() => {
        const handleScroll = () => {
            const element = cardRef.current
            if (!element) return

            const distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
            const elementHeight = element.offsetHeight;
            const scrollTop = document.documentElement.scrollTop;

            let opacity = 1

            if (scrollTop > distanceToTop) {
                opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
              }
        
              if (opacity >= 0) {
                element.style.opacity = opacity;
              }
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);

{/** Modal functions to make it show or hide */}
    Modal.setAppElement('#root')
    const [showModal, setShowModal] = useState(false)
    
    const handleCloseModal = () => {
      setShowModal(false)
    }

{/** Styling modal */}

    const modalStyle = {
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.80)",
        zIndex: "9"
      },
      content: {
        fontFamily: "Hahmlet",
        color: "white",
        backgroundColor: "rgb(0, 2, 3)",
        border: "solid 1px rgb(0, 41, 61)",
        scrollbarColor: "white rgba(0, 0, 0, 0)",
        marginTop: "2vh"
      }
    }
        
    
    return(
      <>
      {/* Getting the projet with the right id then getting all it's data */}
          {projects
            .filter((project) => {
              return (project.id === id)
            })
            .map(({id, title, tools, objectif, tasks, challenges, memory, skills, pictures, gitlink}) => {

      {/* Turning tools,tasks and skills arrays in lists */}
              const toolsList = tools.map((tool, index) => {
                return (<TechIcon key={index} url={tool.url} name={tool.name}/>)
              })

              const tasksList = tasks.map((task, index) => {
                return (<li key={index}>{task}</li>)
              })

              const skillsList = skills.map((skill, index) => {
                return (<li key={index}>{skill}</li>)
              })


              return (
      /** Creating the modal structure with all the data we got from the json file */ 
                  <Modal isOpen={showModal} style={modalStyle} key={id} onRequestClose={handleCloseModal} shouldCloseOnOverlayClick={true}>
                    <i onClick={()=> setShowModal(false)} className="fa-regular fa-circle-xmark fa-xl absolute top-6 right-4 cursor-pointer"></i>
                    <h2 className="font-semibold lg:font-bold text-lg xl:text-xl md:uppercase mt-4 sm:mt-auto">{title}</h2>
                    <Slideshow pictures={pictures} />
                    <div className="m-2 md:m-4 py-4 border-y border-indigo-50 flex flex-col gap-6">
                      <div>
                        <h3 className={titlesStyle}>Outils utilisés :</h3>
                        <div className="flex gap-4">{toolsList}</div>
                      </div>
                      <div>
                        <h3 className={titlesStyle}>Objectif du projet :</h3>
                        <p className={innerTextStyle}>{objectif}</p>
                      </div>
                      <div>
                        <h3 className={titlesStyle}>Tâches accomplies :</h3>
                        <ul className={listStyle}>{tasksList}</ul>
                      </div>
                      <div>
                        <h3 className={titlesStyle}>Défis rencontrés :</h3>
                        <p className={innerTextStyle}>{challenges}</p>
                      </div>
                      <div>
                        <h3 className={titlesStyle}>J'en retiens ceci :</h3>
                        <p className={innerTextStyle}>{memory}</p>
                      </div>
                      <div>
                        <h3 className={titlesStyle}>Ce que j'ai appris avec ce projet :</h3>
                        <ul className={listStyle}>{skillsList}</ul>
                      </div>
                    </div>
                    <span className="my-4 flex w-full justify-center">
                      <a href={gitlink} target="_blank" className="text-amber-400">Voir ce projet sur Github <i className="fa-solid fa-link"></i></a>
                    </span>
                  </Modal>
              )
            })
          }

        {/* On click on the card, the modal will be shown */}
        <li ref={cardRef} id={id} onClick={()=> setShowModal(true)} className="relative w-[90vw] md:w-[35vw] lg:w-[25vw] h-fit inline-block md:mx-10 xl:mx-20 bg-sky-600/15 backdrop-blur-lg font-hahmlet p-2 md:p-4 text-sm md:text-base text-indigo-50 rounded-2xl hover:bg-sky-500/35 cursor-pointer">
            <div className="content-center flex flex-col justify-between h-[90%]">
                <img className="h-[25vh] object-cover rounded-xl" src={cover} alt={`Couverture du projet ${title}`} />
                <p className="w-full text-wrap h-[7vh] py-3">{title}</p> 
            </div>
        </li>
      </>
        
    )
}

export default Card