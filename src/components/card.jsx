import { useEffect, useRef } from "react"
import {projects} from '../assets/data/projects-data.json'
import Modal from 'react-modal'
import { useState } from "react"
import Slideshow from "./slideshow"

function Card({id, title, cover}){

    const cardRef = useRef(null)

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

    Modal.setAppElement('#root')
    const [showModal, setShowModal] = useState(false)

    const modalStyle = {
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.25)"
      },
      content: {
        width: "50vw",
        margin: "auto",
        position: "fixed",
        fontFamily: "Hahmlet",
        color: "white",
        backgroundColor: "rgb(0, 2, 3)",
        border: "none"

      }
    }
        
    
    return(
      <>
        <div id={id} className="w-[60vw] h-[50vh] absolute">
          {projects
            .filter((project) => {
              return (project.id === id)
            })
            .map(({id, title, time, tools, objectif, tasks, challenges, memory, skills, pictures, gitlink}) => {

              const tasksList = tasks.map((task, index) => {
                return (<li key={index}>{task}</li>)
              })

              const skillsList = skills.map((skill, index) => {
                return (<li key={index}>{skill}</li>)
              })

              return (
                  <Modal isOpen={showModal} style={modalStyle} key={id}>
                    <i onClick={()=> setShowModal(false)} className="fa-regular fa-circle-xmark fa-xl absolute top-6 right-4 cursor-pointer"></i>
                    <h2 className="font-bold text-xl uppercase">{title}</h2>
                    <Slideshow pictures={pictures} />
                    <div className="m-4 py-4 border-y border-indigo-50">
                      <p className="font-bold text-lg text-amber-400">Durée :</p>
                      <p>{time}</p>
                      <p className="font-bold mt-4 text-lg text-amber-400">Outils utilisés :</p>
                      <p>{tools}</p>
                      <p className="font-bold mt-4 text-lg text-amber-400">Objectif du projet :</p>
                      <p>{objectif}</p>
                      <p className="font-bold mt-4 text-lg text-amber-400">Tâches accomplies :</p>
                      <ul className="list-disc list-inside">{tasksList}</ul>
                      <p className="font-bold mt-4 text-lg text-amber-400">Défis rencontrés :</p>
                      <p>{challenges}</p>
                      <p className="font-bold mt-4 text-lg text-amber-400">J'en retiens ceci :</p>
                      <p>{memory}</p>
                      <p className="font-bold mt-4 text-lg text-amber-400">Ce que j'ai appris avec ce projet :</p>
                      <ul className="list-disc list-inside">{skillsList}</ul>
                    </div>
                    <span className="my-4 flex w-full justify-center">
                      <a href={gitlink} target="_blank" className="text-amber-400">Voir ce projet sur Github <i className="fa-solid fa-link"></i></a>
                    </span>
                    
                  </Modal>
              )
            })
          } 
        </div>
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