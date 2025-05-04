function TechIcon({url, name}){
    return(
        <img src={url} alt={`Logo de ${name}`} className="max-h-[40px] drop-shadow-[0_0_1px_rgb(255,255,255)]"/>
    )
}

export default TechIcon