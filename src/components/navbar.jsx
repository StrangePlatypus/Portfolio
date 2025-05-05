import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import logo from '/images/PORTFOLIO.png'

function Navbar(){

// UseLocation to change link color
    let location = useLocation()


// Change navbar look on viewport width
    const [isLargeViewport, setLargeViewport] = useState(false)

    useEffect(() => {
        if(window.innerWidth >= 768) {
            setLargeViewport(true)
        } else {
            setLargeViewport(false)
        }

        const updateMedia = () => {
            if(window.innerWidth >= 768) {
                setLargeViewport(true)
            } else {
                setLargeViewport(false)
            }
        }

        window.addEventListener('resize', updateMedia)
        return() => window.removeEventListener('resize', updateMedia)
    }, [])

// Dropdown menu
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => setIsOpen (!isOpen)
    const closeDropdown = () => setIsOpen(false)

    return(
        <div className="fixed left-2 top-2 z-10"> {isLargeViewport ? (

// When screen is equal or larger than 768px :
            <nav className='font-hahmlet fixed left-0 top-0 h-full w-[5vw] items-center flex flex-col backdrop-blur-xs bg-black/50 border-r border-stone-900/70'>
                <img src={logo} alt="Initiales de Julie Poignant" className="logo my-4 mx-auto w-[70%] self-center" />
                <div className='text-[16px] tracking-widest grow flex flex-col justify-around'>
                    <Link to="/" className={`whitespace-nowrap text-indigo-50 -rotate-90 hover:text-amber-500 ${location.pathname === "/" ? 'active_link' : ''}`}>Accueil</Link>
                    <Link to="/a-propos" className={`whitespace-nowrap text-indigo-50 -rotate-90 hover:text-amber-500 ${location.pathname === "/a-propos" ? 'active_link' : ''}`}>À propos</Link>
                    <Link to="/projets" className={`whitespace-nowrap text-indigo-50 -rotate-90 hover:text-amber-500 ${location.pathname === "/projets" ? 'active_link' : ''}`}>Projets</Link>
                    <Link to="/contact" className={`whitespace-nowrap text-indigo-50 -rotate-90 hover:text-amber-500 ${location.pathname === "/contact" ? 'active_link' : ''}`}>Contact</Link>
                    <a href='https://drive.google.com/file/d/1rVWa-tt9hG4SjmTxe5SXMkEhJmKLKRW4/view?usp=sharing' target='_blank' className={`text-indigo-50 -rotate-90 hover:text-amber-500 ${location.pathname === "/curriculum" ? 'active_link' : ''}`}>CV <i className="fa-solid fa-download"></i></a>
                </div>
                <div className='text-indigo-50 font-light h-24 content-center flex flex-col justify-between py-4'>
                    <a href="https://www.linkedin.com/in/julie-poignant/" target='_blank' aria-label='Lien vers Linkedin' className='hover:text-amber-500'><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                    <a href="https://github.com/StrangePlatypus?tab=repositories" target='_blank' aria-label='Lien vers Github' className='hover:text-amber-500'><i className="fa-brands fa-square-github fa-2xl"></i></a>
                </div>
            </nav>
        ) : (

// If screen is smaller than 768px :
            <nav className='font-hahmlet justify-items-start'>
                <button onClick={toggleDropdown} className='text-amber-500'><i className="fa-solid fa-bars fa-xl"></i></button>
                {isOpen && (
                    <ul role='menu' className='text-left rounded-lg bg-black/40 backdrop-blur-lg p-4 leading-7'>
                        <li><Link to="/" onClick={closeDropdown} className={`text-indigo-50 hover:text-amber-500' ${location.pathname === "/" ? 'active_link' : ''}`} role='menu-item'>Accueil</Link></li>
                        <li><Link to="/a-propos" onClick={closeDropdown} className={`my-2 text-indigo-50 hover:text-amber-500 ${location.pathname === "/a-propos" ? 'active_link' : ''}`} role='menu-item'>A propos</Link></li>
                        <li><Link to="/projets" onClick={closeDropdown} className={`my-2 text-indigo-50 -rotate-90 hover:text-amber-500 ${location.pathname === "/projets" ? 'active_link' : ''}`} role='menu-item'>Projets</Link></li>
                        <li><Link to="/contact" onClick={closeDropdown} className={`my-2 text-indigo-50 -rotate-90 hover:text-amber-500 ${location.pathname === "/contact" ? 'active_link' : ''}`} role='menu-item'>Contact</Link></li>
                        <li><a href='https://drive.google.com/file/d/1rVWa-tt9hG4SjmTxe5SXMkEhJmKLKRW4/view?usp=sharing' target='_blank' onClick={closeDropdown} className={`my-2 text-indigo-50 hover:text-amber-500 ${location.pathname === "/curriculum" ? 'active_link' : ''}`} role='menu-item'>CV <i className="fa-solid fa-download"></i></a></li>
                        <li className='flex gap-4'>
                            <a href="https://www.linkedin.com/in/julie-poignant/" target='_blank' className='text-indigo-50 hover:text-amber-500'><i className="fa-brands fa-linkedin fa-xl"></i></a>
                            <a href="https://github.com/StrangePlatypus?tab=repositories" target='_blank' className='text-indigo-50 hover:text-amber-500'><i className="fa-brands fa-square-github fa-xl"></i></a>
                        </li>
                    </ul>
                )}
            </nav>
        )}
            
        </div>
    )
}

export default Navbar