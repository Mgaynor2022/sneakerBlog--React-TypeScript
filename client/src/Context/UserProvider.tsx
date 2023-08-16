import React, {useState, createContext} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { UserContextType } from "../Types/Types"
import { Inputs, Sneakers, Kobe } from "../Types/Types"

const ContextDefault: UserContextType = {
    getPublicSneakers: () => { },
    allSneakers: [],
    signup: () => { },
    login: () => { },
    resetAuthErr: () => { },
    errMsg: '',
    comments: [],
    logout: () => { },
    token: '',
    popularSneakers: [],
    getPopularSneakers: () => { },
    getKobeSneakers: () => { },
    kobeSneakers: [],
    likeKobeSneaker: () => { },
    dislikeKobeSneaker: () => { },
    backButton: () => { },
    user: ""
}

type ContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext <UserContextType>(ContextDefault)

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider ({children} : ContextProviderProps) {
   

const user: string = localStorage.getItem("user") || "{}";
const parsedUser: any = JSON.parse(user);


const initState = {
    // user: JSON.parse(localStorage.getItem("user")) || {},
    user: parsedUser,
    token: localStorage.getItem("token") || "", // checks to see if the token is in localStorage if not ""
    sneakers:[],
    comments:[],
    errMsg: "",
    
}

const [userState, setUserState] = useState(initState)

function signup(credentials: Inputs): void{
    axios.post("local/auth/signup", credentials)
    .then(res => {
        const {user,token} = res.data
        // // saving the token so when the page refresh data is saved 
        localStorage.setItem("token", token)
        // // if your saving complex data types objects or arrays you need use JSON.Stringfy()
        localStorage.setItem("user", JSON.stringify(user))
        setUserState((prevState) => ({ ...prevState, user, token }));
    })
    .catch((err) => handleAuthErr(err.response.data.errMsg));
}

function login(credentials: Inputs): void{
    axios.post("local/auth/login", credentials)
    .then(res => {
        const {user, token} = res.data
        localStorage.setItem("token", token) // saving token so it wont be lost when page refresh
        localStorage.setItem("user", JSON.stringify(user)) // if your saving complex data types
        // getUserData when user logs in there data will be displayed
        setUserState((prevUserState) => ({ ...prevUserState, user, token }));
        // getUserExercise()
    })
    // .catch(err => console.log(err))
    .catch((err) => handleAuthErr(err.response.data.errMsg));
}
// Gotta fix the error 
function logout() {
localStorage.removeItem("token");
localStorage.removeItem("user");
setUserState((prevState) => ({
    ...prevState,
    user: "",
    token: ""
}));
}

// function logout(){
//     localStorage.removeItem("token")
//     localStorage.removeItem("user")
//     setUserState({
//         user:{},
//         token:""
//     });
// }

function handleAuthErr(errMsg: string){
    setUserState(prevState => ({
        ...prevState,
        errMsg
    }))
}

function resetAuthErr(){
    setUserState(prevState =>({
        ...prevState,
        errMsg: ""
        }))
    }

    const navigate = useNavigate()

    const backButton = () => {
        navigate("/PublicPage", {replace: true})
    }

    // State for all of the sneakers 
    const [allSneakers, setAllSneakers] = useState<Sneakers[]>([])

    const getPublicSneakers = () => {
        const url: string = "/local/api/publicSneakers"
        userAxios.get(url)
        .then(res => setAllSneakers(res.data))
        .catch((err) => handleAuthErr(err.response.data.errMsg))
    }

    // State and functions for Popular sneakers 
    const [popularSneakers, setPopularSneakers] = useState<Sneakers[]>([])

    const getPopularSneakers = () => {
        const url: string = "/local/api/popularSneakers"
        userAxios.get(url)
        .then(res => setPopularSneakers(res.data))
        .catch((err) => handleAuthErr(err.response.data.errMsg))
    }
        // State for kobe sneakers 

    const [kobeSneakers, setKobeSneakers] = useState<Kobe[]>([])

    const getKobeSneakers = () => {
        const url: string = ("/local/api/kobeSneakers")
        userAxios.get(url)
        .then(res => setKobeSneakers(res.data))
        .catch(err => console.log(err))
        }

    const likeKobeSneaker = (sneakerId: string) => {
        const url: string = `/local/api/KobeSneakers/like/${sneakerId}`;
        userAxios
          .put(url)
          .then((res) => {
            setKobeSneakers((prevState) =>
              prevState.map((prev) => (sneakerId !== prev._id ? prev : res.data))
            );
          })
          .then(() => getKobeSneakers())
          .catch((err) => console.log(err));
      };

      const dislikeKobeSneaker = (sneakerId: string) => {
        const url: string = `/local/api/kobeSneakers/dislike/${sneakerId}`;
        userAxios
          .put(url)
          .then((res) => {
            setKobeSneakers((prevState) =>
              prevState.map((prev) => (sneakerId !== prev._id ? prev : res.data))
            );
          })
          .then(() => getKobeSneakers())
          .catch((err) => console.log(err));
      };



    
    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr,
                getPublicSneakers,
                allSneakers, 
                popularSneakers,
                getPopularSneakers,
                getKobeSneakers,
                kobeSneakers,
                likeKobeSneaker,
                dislikeKobeSneaker,
                backButton,
               
                
                
                
            }}>
            {children}
        </UserContext.Provider>
    )
}

