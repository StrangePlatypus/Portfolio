function Icon({icon}){
    return(
        <div className="w-fit text-[0.5em] sm:text-base md:text-lg lg:text-xl rounded-3xl backdrop-blur-sm p-2 md:p-4 rounded-full aspect-square place-content-center-safe bg-sky-200/15 hover:bg-sky-500/35">
            {icon}
        </div>
    )
}

export default Icon