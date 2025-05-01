import { useState } from "react"

function Slideshow({pictures}){

    
    const [index, setIndex] = useState(0)

    const decreaseIndex = () => {
        if (index === 0){
            setIndex(() => pictures.length -1 )
        } else {
            setIndex((previousIndex) => previousIndex - 1)
        }
    }

    const increaseIndex = () => {
        if (index === pictures.length - 1){
            setIndex(() =>  0)
        }
        else {
            setIndex((previousIndex) => previousIndex + 1)
        }
    }

    return(
        <div className="p-8 flex flex-col justify-center font-hahmlet">
            <img src={pictures[index]} alt="Capture d'écran du projet" className="max-w-[80%] h-[50vh] m-auto object-cover"/>
            <i className="fa-solid fa-chevron-left fa-xl absolute left-10 cursor-pointer hover:scale-125 transition-all duration-300 ease-out" onClick={decreaseIndex}></i>
            <i className="fa-solid fa-chevron-right fa-xl absolute right-10 cursor-pointer hover:scale-125 transition-all duration-300 ease-out" onClick={increaseIndex}></i>
            <p className="text-center font-semibold">{index + 1}/{pictures.length}</p>
        </div>
    )
}

export default Slideshow