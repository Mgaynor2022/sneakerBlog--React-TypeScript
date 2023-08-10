import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserProvider";
import AuthForm from "./AuthForm";
import LetteringStairs from "../LetteringStaires";


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
    

    return (

// pr-10 pl-10 pt-0  pb-0 mt-0 mr-auto mb-0 ml-auto
<div id="auth" className="lg:py-10 md:pl-16 " >
  <div className="flex flex-col items-center justify-between  max-w-7xl
      xl:px-5 lg:flex-row">
    <div className="flex flex-col items-center w-full pt-5 md:pr-10 md:pb-20 md:pl-10 lg:pt-20 lg:flex-row">
      <div className="w-full bg-cover relative max-w-md  lg:w-7/12">
        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
    <LetteringStairs />
        </div>
      </div>
      { !toggle ?
            <div className=' w-full md:ml-10 '>
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
            <div className='  w-full md:ml-10'>
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
                errMsg={errMsg}
                header= "Login Into Account"
                
                />
            <p className="text-center underline cursor-pointer" onClick={toggleForm}>Not a Member?</p>
            </div>
            }
    </div>
  </div>
</div>
            
  
	
    
 
 
   
    )
 
}


export default Auth