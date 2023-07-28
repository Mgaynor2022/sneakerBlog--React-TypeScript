import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import AuthForm from "./AuthForm";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud"


 const Auth: React.FC = () => {

    const { login,
             signup,
            resetAuthErr,
            errMsg
        }  = useContext(UserContext)

    const [inputs, setInputs] = useState({
        username:"",
        password:""
    })
    const [toggle, setToggle] = useState<boolean>(false)

    const toggleForm = (): void => {
        setToggle(prevToggle => !prevToggle)
        resetAuthErr()
    }
    const handleSignUp = (e: React.FormEvent <HTMLFormElement>) => {
        e.preventDefault()
        signup(inputs)
    }
    const handleLogin = (e: React.FormEvent <HTMLFormElement>) => {
        e.preventDefault()
        login(inputs)
    }

    const handleChange = (e: React.ChangeEvent <HTMLInputElement>) => {
        setInputs((prevInput) =>({
            ...prevInput,
            [e.target.name] : e.target.value
        }))
    }

    const brandNames: string[] = [
        'Jordan', 'Nike', 'Adidas',
         'New Balance','Puma', 'LeBron',
          'Kyrie', 'Reebok','Vans','Asics',
        'Converse', 'Under Armour', 'Supra',
        'Saucony', 'Yeezy', 'Crocs', 'Kobe']
    

    return (


<div id="auth" className=" bg-gradient-to-l from-blue-200 to-cyan-200 lg:py-10">
  <div className="flex flex-col  items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row">
    <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
      <div className="w-full bg-cover relative max-w-md  lg:w-7/12">
        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
            {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
        <TagCloud  className="mr-20"
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "normal",
            initSpeed: 'slow'
        })}
        onClickOptions={{ passive: true }}>
        {brandNames}
    </TagCloud>
        </div>
      </div>
      { !toggle ?
            <div className='w-full ml-10 '>
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleSignUp}
                inputs={inputs}
                btnText= "Sign Up"
                errMsg={errMsg}
                header ="Signup For An Account"
                />
                <p className="text-center underline cursor-pointer" onClick={toggleForm}>Already A Member?</p>
            </div>
            :
            <div className='w-full ml-10'>
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
                errMsg={errMsg}
                header= "Login Into Your Account"
                
                />
            <p className="text-center underline cursor-pointer" onClick={toggleForm}>Not a Member</p>
            </div>
            }
    </div>
  </div>
</div>
            
  
	
    
 
 
   
    )
 
}


export default Auth