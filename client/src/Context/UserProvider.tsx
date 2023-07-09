import React, {useState, useEffect,  createContext} from "react"
import axios from "axios"
import { UserContextType } from "../Components/Types"
import { Inputs, Sneakers, Comments, Kobe } from "../Components/Types"

const ContextDefault: UserContextType = {
    getPublicSneakers: () => {},
    allSneakers: [],
    signup: () => {},
    login: () => {},
    resetAuthErr: () => {},
    errMsg: '',
    addComment: () => [],
    getComments: () => {},
    deleteComment: () => {},
    comments: [],
    logout: () => {},
    token: '',
    popularSneakers: [],
    getPopularSneakers: () => {},
    getKobeSneakers: () => {},
    kobeSneakers: []
    
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
    // type InitState =  {
    //     user: string;
    //     token: string;
    //     sneakers: {}[]
    //     comments: {}[]
    //     errMsg: string

    // }

    const user: string = localStorage.getItem("user") || "{}";
    const parsedUser: any = JSON.parse(user);
  
    
    const initState = {
        user: parsedUser,
        token: localStorage.getItem("token") || "", // checks to see if the token is in localStorage if not ""
        sneakers:[],
        comments:[],
        errMsg: ""
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

        // State for all of the sneakers 
        const [allSneakers, setAllSneakers] = useState<Sneakers[]>([])
        
        const getPublicSneakers = () => {
            const url: string = "/local/api/publicSneakers"
            userAxios.get(url)
            .then(res => setAllSneakers(res.data))
            .catch(err => console.log(err))
        }

        // State and functions for Popular sneakers 
        const [popularSneakers, setPopularSneakers] = useState<Sneakers[]>([])

        const getPopularSneakers = () => {
            const url: string = "/local/api/popularSneakers"
            userAxios.get(url)
            .then(res => setPopularSneakers(res.data))
            .catch(err => console.log(err))
        }

        // Comments
        interface Comment {
            _id: string;
            // Other properties of the comment
          }
          const [comments, setComments] = useState<Comments[]>([]);
        
        // const [comments, setComments] = useState([])

        const getComments = () => {
            const url: string = "/local/api/userComments"
            userAxios.get(url)
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
        }

        const addComment = (info: string): void => {
            const url: string = "/local/api/userComments"
            userAxios.post(url, info)
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
        }

        const deleteComment = (commentId: string): void => {
            const url: string = `/local/api/userComments/${commentId}`;
            userAxios.delete(url, { data: commentId })
              .then(res => {
            
                setComments(prev => prev.filter(data => data._id !== commentId));
              });
          };

          // State for kobe sneakers 

          const [kobeSneakers, setKobeSneakers] = useState<Kobe[]>([])

          const getKobeSneakers = () => {
            const url: string = ("/local/api/kobeSneakers")
            userAxios.get(url)
            .then(res => setKobeSneakers(res.data))
            .catch(err => console.log(err))
          }


       
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
                    addComment,
                    getComments,
                    deleteComment,
                    comments,
                    popularSneakers,
                    getPopularSneakers,
                    getKobeSneakers,
                    kobeSneakers
                    
                    
                   
                }}>
                {children}
            </UserContext.Provider>
        )
    }
   
    