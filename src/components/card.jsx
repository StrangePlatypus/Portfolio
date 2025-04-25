function Card({id, title, cover}){
    
    return(
        <li className="bg-sky-600/15 backdrop-blur-lg font-hahmlet p-4 text-sm md:text-base text-indigo-50 content-center flex flex-col gap-4 rounded-2xl hover:bg-sky-500/35 cursor-pointer" id={id}>
            <img className="h-[25vh] object-cover rounded-xl" src={cover} alt={`Couverture du projet ${title}`} />
            <h2>{title}</h2>
        </li>
    )
}

export default Card