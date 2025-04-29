function StudyCard({diploma, school, location, year}){
    return(
        <div className="font-hahmlet text-indigo-50 font-light rounded-3xl bg-black/40 backdrop-blur-lg md:p-4 w-[90vw] md:w-[40vw]">
            <h3 className="text-xl md:text-2xl my-6 font-semibold">{diploma}</h3>
            <p className="text-sm md:text-base">{school}, <span className="italic">{location}</span><br/>{year}</p>
        </div>
    )
}

export default StudyCard