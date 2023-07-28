import React, { createContext, useContext, useState } from "react";
import axios from "axios"
import { Sneakers, Kobe, SneakerContextType } from "../Types/Types";



const SneakerDefault: SneakerContextType = {
    allSneakers: [],
    popularSneakers: [],
    getKobeSneakers: () => { },
    getPopularSneakers: () => { },
    getPublicSneakers: () => { },
    likeKobeSneaker: () => { },
    dislikeKobeSneaker: () => { },
    likePopularSneakers: () => { },
    dislikePopularSneakers: () => { },
    kobeSneakers: []
}


export const SneakerContext = createContext<SneakerContextType>(SneakerDefault)

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})
type ContextProviderProps = {
    children: React.ReactNode
}


const SneakerProvider = ({children} : ContextProviderProps) => {

    // State for all of the sneakers 
    const [allSneakers, setAllSneakers] = useState<Sneakers[]>([])
    
    // State for Popular sneakers 
    const [popularSneakers, setPopularSneakers] = useState<Sneakers[]>([])

    // State for kobe sneakers
    const [kobeSneakers, setKobeSneakers] = useState<Kobe[]>([])


    // GET Requests 
    const getKobeSneakers = () => {
        const url: string = ("/local/api/kobeSneakers")
        userAxios.get(url)
        .then(res => setKobeSneakers(res.data))
        .catch(err => console.log(err))
    }
    const getPublicSneakers = () => {
        const url: string = "/local/api/publicSneakers"
        userAxios.get(url)
        .then(res => setAllSneakers(res.data))
        .catch(err => console.log(err))
    }

    const getPopularSneakers = () => {
        const url: string = "/local/api/popularSneakers"
        userAxios.get(url)
        .then(res => setPopularSneakers(res.data))
        .catch(err => console.log(err))
    }

    // PUT request for updating likes and dislikes

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


    const likePopularSneakers = (sneakerId: string) => {
        const url: string = `/local/api/popularSneakers/likes/${sneakerId}`
        userAxios
        .put(url)
        .then((res) => {
            setPopularSneakers((prevState) =>
              prevState.map((prev) => (sneakerId !== prev._id ? prev : res.data))
            );
          })
          .then(() => getPopularSneakers())
          .catch((err) => console.log(err));
    }

    const dislikePopularSneakers = (sneakerId: string) => {
        const url: string = `/local/api/popularSneakers/dislikes/${sneakerId}`
        userAxios
        .put(url)
        .then((res) => {
            setPopularSneakers((prevState) =>
              prevState.map((prev) => (sneakerId !== prev._id ? prev : res.data))
            );
          })
          .then(() => getPopularSneakers())
          .catch((err) => console.log(err));
    }

    return (
        <SneakerContext.Provider
        value={{
            allSneakers,
            popularSneakers,
            getKobeSneakers,
            getPublicSneakers,
            getPopularSneakers,
            likeKobeSneaker,
            likePopularSneakers,
            dislikeKobeSneaker,
            dislikePopularSneakers,
            kobeSneakers

        }}>
            {children}

        </SneakerContext.Provider>
    )


    
}


export default SneakerProvider