function TextDiv({title, innerText,displayList, list}){

    return(
        <div className="xl:w-[55%] md:w-[50%] w-[95%] p-2 md:p-8 rounded-3xl bg-black/40 backdrop-blur-lg">
                        <h2 className="text-xl md:text-2xl lg:text-3xl my-8 font-semibold">{title}</h2>
                        <p className="text-sm md:text-base lg:text-lg whitespace-pre-line">{innerText}</p>
                        <ul className={`${displayList} text-sm md:text-base lg:text-lg text-start my-6 lg:px-12 list-disc list-inside`}>{list}</ul>
                    </div>
    )
}

export default TextDiv