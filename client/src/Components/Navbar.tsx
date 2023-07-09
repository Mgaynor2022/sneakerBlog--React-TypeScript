import React, {useState} from "react"
import {Routes, Route, Link} from "react-router-dom"
import {RxHamburgerMenu } from 'react-icons/rx'



const Navbar = (props) => {

    const { logout} = props

    const [toggleNavbar, setNavbar] = useState<boolean>(false)

    const changeNavbar = (): void => {
        setNavbar( ! toggleNavbar)
    }

    return (
        
        <div className="">
            <header id="bigNavbar" className="bg-black px-8 py-8 flex justify-between items-center">
					<h1  className="font-bold text-xl tracking-wider">infoMovi App</h1>
					<ul className="flex uppercase text-sm ml-8">

						<li className="ml-8 text-gray-600 hover:underline hover:decoration-4 hover:underline-offset-8">
							<Link to="/PublicPage">Home</Link>
						</li>
						{/* <li className="ml-8 text-gray-600 hover:underline hover:decoration-4 hover:underline-offset-8">
							<Link to="/searchStyle">Browse</Link>
						</li>
						<li className="ml-8 text-gray-600 hover:underline hover:decoration-4 hover:underline-offset-8">
							<Link  to="/Favorites">Favorites</Link>
						</li> */}
                        <li className="mr-6 ">
                  <button onClick={logout} className="px-5 py-2 bg-red-500 text-white font-semibold hover:bg-gray-700">Logout</button> 
                </li>
					</ul>
				</header>
        <div id='mobile' className="">
                <nav  className={'px-2 py-5  bg-white items-center' }>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <h1 className="font-bold text-sm tracking-wider"> sneakerBlog App</h1>
                        
                    </div>
                    <RxHamburgerMenu className=' cursor-pointer mr-2 ' onClick={changeNavbar} size='2em'  />
                </div>

                <div className={toggleNavbar ? "flex justify-center tracking-wide w-full z-50 bg-white" : "hidden"} id="navbar-hamburger">
                    <ul id='mobileNavbar' className = "flex flex-col uppercase text-lg text-center ml-8 pt-10">
                    <li className="ml-8">
							<Link to="/PublicPage">Home</Link>
						</li>
						{/* <li className="ml-8">
							<Link to="/searchStyle">Browse</Link>
						</li>
						<li className="ml-8">
							<Link  to="/Favorites">Logout</Link>
						</li> */}
                            </ul>
                </div>
                </nav>
            </div>
    </div>
        
        
    )

}

export default Navbar