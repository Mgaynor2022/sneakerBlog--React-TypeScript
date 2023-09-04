import React from "react";
import { GrFacebook} from 'react-icons/gr'
import { BsDiscord, BsTwitter, BsInstagram } from 'react-icons/bs'
import About from "./About";


const Footer: React.FC = () => {

    return (
        <footer id="footer" className="text-white bg-black text-center ">
            <div className="grid md:grid-cols-6 mt-5 ">
                <div className=" col-start-1 col-end-3 p-2">
                    <h1 className="md:text-2xl text-sm font-bold mb-2">About Me</h1>
                    <div className=" text-xs md:text-base sm:p-2">
                        <About />
                    </div>
                    <p className="text-xs">@ 2023 sneaker blog.</p>
                </div>
                <div className=" col-start-3 col-end-4 p-2 ">
                    <h1 className="mb-5 font-bold  md:text-2xl ">Company</h1>
                    <ul className="flex flex-col justify-between   ">
                        <li className="mb-2 text-sm ">
                            Contact Us 
                        </li>
                        <li className="mb-2  ">
                            Privacy Policy
                        </li>
                        <li>
                            Terms & Conditions
                        </li>
                    </ul>
                </div>
                <div id="icons" className="col-start-1 col-end-4 sm:col-start-4 sm:col-end-5 row-start-2 sm:row-start-1 p-2 items-center">
                    {/* <h1 className="mb-5 font-bold">Social Media</h1> */}
                    <ul className="flex sm:flex-row items-center justify-evenly mt-5  cursor-pointer ">
                        <GrFacebook className="hover:text-red-500 transition delay-200" size={30}  /> 
                        <BsDiscord className="hover:text-red-500 transition delay-200" size={30} />
                        <BsTwitter className="hover:text-red-500 transition delay-200" size={30} />
                        <BsInstagram className="hover:text-red-500 transition delay-200" size={30} />

                    </ul>
                </div>
            </div>
        </footer>
    )

}

export default Footer