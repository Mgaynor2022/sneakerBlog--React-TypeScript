import {useState} from "react"
import {Link} from "react-router-dom"
import {RxHamburgerMenu } from 'react-icons/rx'



const Navbar = (props: { logout: any }) => {

    const { logout} = props

    const [toggleNavbar, setNavbar] = useState<boolean>(false)

    const changeNavbar = (): void => {
        setNavbar( ! toggleNavbar)
    }

    return (
        
        <>
            <nav id="bigNavbar" className="bg-black px-8 py-8 flex justify-between items-center">
					<h1  className="font-bold text-xl text-white tracking-wider">SneakerBlog</h1>
					<ul className="flex items-center uppercase text-sm ml-8">

						<li className="ml-8 text-white hover:underline hover:decoration-4 hover:underline-offset-8">
							<Link to="/PublicPage">Home</Link>
						</li>

                        <li className="ml-6 ">
                  <button onClick={logout} className="px-5 py-2 bg-red-500 text-white font-semibold hover:bg-gray-700">Logout</button> 
                </li>
					</ul>
				</nav>
        <div id='mobile' >
                <nav id='mobileNavbar'  className='px-2 py-5  bg-black items-center w-screen fixed z-20 mb-20' >
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <h1 className="font-bold tracking-wider text-white"> sneakerBlog</h1>
                        
                    </div>
                    <RxHamburgerMenu className='text-white cursor-pointer mr-2 ' onClick={changeNavbar} size='2em'  />
                </div>

                <div className={toggleNavbar ? "flex justify-center tracking-wide w-full z-50 bg-black" : "hidden"} id="navbar-hamburger">
                    <ul id='mobileNavbar' className = "flex flex-col uppercase text-lg text-center ml-8 pt-10">
                    <li className="ml-8 text-white">
							<Link to="/PublicPage">Home</Link>
						</li>
						 <li className="ml-8">
                            <button onClick={logout} className="px-5 py-2 bg-red-500 text-white font-semibold hover:bg-gray-700">Logout</button> 
						</li> 
						
                            </ul>
                </div>
                </nav>
            </div>
    </>
        
        
    )

}

export default Navbar