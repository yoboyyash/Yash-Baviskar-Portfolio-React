import { useState } from 'react';
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (

        <nav className="flex items-center justify-between h-16 lg:h-20 bg-[#223]/30 rounded-b-3xl shadow-lg px-4">

            <h1 className="text-white text-4xl sm:text-4xl transition-all duration-200 hover:scale-125">
                <NavLink to="/" className='font-bold ml-12'><span>Yash Baviskar</span></NavLink>
            </h1>
            <ul className="text-gray-700 font-medium hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 text-2xl">
       
                <li className='p-2 transition-all duration-200 hover:scale-150'><NavLink to="/" activeclassname="selected">Home</NavLink></li>
                <li className='p-2 transition-all duration-200 hover:scale-150'><NavLink to="/about" activeclassname="text-black">About</NavLink></li>
                <li className='p-2 transition-all duration-200 hover:scale-150'><NavLink to="/portfolio" activeclassname="text-black">Portfolio</NavLink></li>
                <li className='p-2 transition-all duration-200 hover:scale-150'><NavLink to="/contact" activeclassname="text-black">Contact</NavLink></li>
                <li className='p-2 transition-all duration-200 hover:scale-150'><NavLink to="/resume" activeclassname="text-black">Resume</NavLink></li>
            </ul>


            <section onClick={handleNav} className='block md:hidden text-white z-40 cursor-pointer'>
                
                <section className={nav ? 'z-30 text-gray-300 fixed left-0 top-0 w-full bg-[#202121] ease-in-out duration-500'
                    : 'fixed left-[-100%]'}>
                    <h2 className='text-3xl gray-primary-color m-4'>Yash Baviskar</h2>
                    <ul className='p-8 text-4xl ml-20'>
                        <li className='p-2 transition-all duration-200 hover:scale-150'><NavLink to="/" activeclassname="selected">Home</NavLink></li>
                        <li className='p-2 transition-all duration-200 hover:scale-150'><NavLink to="/about" activeclassname="text-black">About</NavLink></li>
                        <li className='p-2 transition-all duration-200 hover:scale-150'><NavLink to="/portfolio" activeclassname="text-black">Portfolio</NavLink></li>
                        <li className='p-2 transition-all duration-200 hover:scale-150'><NavLink to="/contact" activeclassname="text-black">Contact</NavLink></li>
                        <li className='p-2 transition-all duration-200 hover:scale-150'><NavLink to="/resume" activeclassname="text-black">Resume</NavLink></li>
                    </ul>

                </section>


            </section>
        </nav>


    )
}

export default Navbar