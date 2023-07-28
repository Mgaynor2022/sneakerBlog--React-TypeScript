import React from "react";
import { AuthProps } from "../Types/Types";


const AuthForm = (props: AuthProps) => {

    return (

      
        <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0">
        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
          <p className="w-full text-4xl font-medium text-center leading-snug font-serif">{props.header}</p>

          <form onSubmit={props.handleSubmit} className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Username</p>
              <input placeholder="MikeG" type="text" onChange={props.handleChange} value={props.inputs.username} name="username"
               className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"/>
            </div>

            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Password</p>
              <input placeholder="••••••••" type="password" onChange={props.handleChange} value={props.inputs.password} name="password"
               className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"/>
            </div>

            <div className="relative">
              <button className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-gray-600 bg-gradient-to-l from-blue-200 to-cyan-200
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease">{props.btnText}</button>
            </div>
            <p className="text-red-600 text-center">{props.errMsg}</p>
          </form>
        </div>
      </div>


    )

}
export default AuthForm