import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/PORTFOLIO.png'

function Navbar(){
    return(
        <nav className='z-1 font-hahmlet fixed left-0 top-0 h-full w-24 items-center p-2 flex flex-col backdrop-blur-xs bg-translucentwhite'>
            <img src={logo} alt="Initiales de Julie Poignant" className="logo h-10" />
            <div className='text-[15px] tracking-widest grow flex flex-col justify-around'>
                <Link to="/" className={`text-indigo-50 -rotate-90 hover:text-amber-500' ${useLocation().pathname === "/" ? 'active_link' : ''}`}>Accueil</Link>
                <Link to="/a-propos" className={`text-indigo-50 -rotate-90 hover:text-amber-500 ${useLocation().pathname === "/a-propos" ? 'active_link' : ''}`}>À propos</Link>
                <Link to="/experience" className={`text-indigo-50 -rotate-90 hover:text-amber-500 ${useLocation().pathname === "/experience" ? 'active_link' : ''}`}>Expérience</Link>
                <Link to="/projets" className={`text-indigo-50 -rotate-90 hover:text-amber-500 ${useLocation().pathname === "/projets" ? 'active_link' : ''}`}>Projets</Link>
                <Link to="/contact" className={`text-indigo-50 -rotate-90 hover:text-amber-500 ${useLocation().pathname === "/contact" ? 'active_link' : ''}`}>Contact</Link>
            </div>
            <div className='text-[12px] text-indigo-50 font-light h-24 content-center flex flex-col justify-between py-4'>
                <a href="#" className='hover:text-amber-500'>LinkedIn <i className="fa-solid fa-arrow-up-long fa-sm rotate-45" ></i></a>
                <a href="#" className='hover:text-amber-500'>Github <i className="fa-solid fa-arrow-up-long fa-sm rotate-45"></i></a>
            </div>
        </nav>
    )
}

export default Navbar