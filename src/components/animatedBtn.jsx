import { Link } from "react-router-dom"

function Button({link, innerText, icon}){
    return(
        <Link to={link} className='btn_enter w-fit px-4 py-2 h-[3em] w-1/4 text-black md:font-semibold text-center content-center rounded-4xl transition-all duration-400 ease-in-out'>{innerText} {icon}</Link>
    )
}

export default Button