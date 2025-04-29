function JobCard({icon, job, company, location, start, end, description}){
    return(
        <div className="font-hahmlet text-indigo-50 font-light rounded-3xl bg-black/40 backdrop-blur-lg md:p-4 w-[90vw] md:w-[40vw]">
            <h3 className="text-xl md:text-2xl my-6 font-semibold"><i className={`text-amber-500 mx-2 ${icon}`}></i> {job}</h3>
            <p className="text-sm md:text-base">{company}, <span className="italic">{location}</span><br/>Début : {start} | Fin : {end}</p>
            <p className="text-sm md:text-base my-4 whitespace-pre-line">{description}</p>
        </div>
    )
}

export default JobCard