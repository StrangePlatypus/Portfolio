import { useEffect, useRef } from "react"

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
        
            // Nettoyage à la désinstallation du composant
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
    
    return(
        <li ref={cardRef} className="relative w-[90vw] md:w-[35vw] lg:w-[25vw] h-fit inline-block md:mx-10 xl:mx-20 bg-sky-600/15 backdrop-blur-lg font-hahmlet p-2 md:p-4 text-sm md:text-base text-indigo-50 rounded-2xl hover:bg-sky-500/35 cursor-pointer" id={id}>
            <div className="content-center flex flex-col justify-between h-[90%]">
                <img className="h-[25vh] object-cover rounded-xl" src={cover} alt={`Couverture du projet ${title}`} />
                <p className="w-full text-wrap h-[7vh] py-3">{title}</p> 
            </div>
        </li>
    )
}

export default Card