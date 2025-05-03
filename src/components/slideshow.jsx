import { useState } from "react"

function Slideshow({pictures}){

    const [index, setIndex] = useState(0)
    
{/** When clicking on left arrow we go to the previous picture. If on first picture -> show last picture of the array */}    
    const decreaseIndex = () => {
        if (index === 0){
            setIndex(() => pictures.length -1 )
        } else {
            setIndex((previousIndex) => previousIndex - 1)
        }
    }

{/** When clicking on right arrow we go to the next picture. If on last picture -> show first picture of the array */}  
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
            <img src={pictures[index]} alt="Capture d'écran du projet" className="slider_img max-w-[80%] md:max-w-full h-[25vh] md:h-[50vh] m-auto object-cover"/>
            <i className="fa-solid fa-chevron-left fa-xl absolute left-5 cursor-pointer hover:scale-125 transition-all duration-300 ease-out" onClick={decreaseIndex}></i>
            <i className="fa-solid fa-chevron-right fa-xl absolute right-5 cursor-pointer hover:scale-125 transition-all duration-300 ease-out" onClick={increaseIndex}></i>
            <p className="text-center text-sm xl:text-base md:font-semibold m-2">{index + 1}/{pictures.length}</p>
        </div>
    )
}

export default Slideshow