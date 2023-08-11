import React, { createContext, useContext, useState } from "react";
import axios from "axios"
import { Sneakers, Kobe, SneakerContextType } from "../Types/Types";



const SneakerDefault: SneakerContextType = {
    allSneakers: [],
    popularSneakers: [],
    getKobeSneakers: () => { },
    getPopularSneakers: () => { },
    getPublicSneakers: () => { },
    getJordanSneakers: () => { },
    likeKobeSneaker: () => { },
    dislikeKobeSneaker: () => { },
    likePopularSneakers: () => { },
    dislikePopularSneakers: () => { },
    kobeSneakers: [],
    dislikePublicSneakers: () => {},
    likePublicSneakers: () => {},
    jordanSneakers: [],
    dislikeJordanSneaker: () => {},
    likeJordanSneaker: () => {},
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

    // State for top Jordan Sneakers
    const [jordanSneakers, setJordanSneakers] = useState<Sneakers[]>([])


    // GET Requests 
    const getKobeSneakers = () => {
        const url: string = ("/local/api/kobeSneakers")
        userAxios.get(url)
        .then(res => setKobeSneakers(res.data))
        .catch(err => console.log(err))
    }
    const getJordanSneakers = () => {
      const url: string = ("/local/api/jordanSneakers")
      userAxios.get(url)
      .then(res => setJordanSneakers(res.data))
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

      const likeJordanSneaker = (sneakerId: string) => {
        const url: string = `/local/api/jordanSneakers/like/${sneakerId}`;
        userAxios
          .put(url)
          .then((res) => {
            setJordanSneakers((prevState) =>
              prevState.map((prev) => (sneakerId !== prev._id ? prev : res.data))
            );
          })
          .then(() => getJordanSneakers())
          .catch((err) => console.log(err));
      };

      const dislikeJordanSneaker = (sneakerId: string) => {
        const url: string = `/local/api/jordanSneakers/dislike/${sneakerId}`;
        userAxios
          .put(url)
          .then((res) => {
            setJordanSneakers((prevState) =>
              prevState.map((prev) => (sneakerId !== prev._id ? prev : res.data))
            );
          })
          .then(() => getJordanSneakers())
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

    const likePublicSneakers = (sneakerId: string) => {
      const url: string = `/local/api/publicSneakers/likes/${sneakerId}`
      userAxios
      .put(url)
      .then((res) => {
          setAllSneakers((prevState) =>
            prevState.map((prev) => (sneakerId !== prev._id ? prev : res.data))
          );
        })
        .then(() => getPublicSneakers())
        .catch((err) => console.log(err));

  }
  
  const dislikePublicSneakers = (sneakerId: string) => {
    const url: string = `/local/api/publicSneakers/dislikes/${sneakerId}`
    userAxios
    .put(url)
    .then((res) => {
        setAllSneakers((prevState) =>
          prevState.map((prev) => (sneakerId !== prev._id ? prev : res.data))
        );
      })
      .then(() => getPublicSneakers())
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
            getJordanSneakers,
            likeKobeSneaker,
            likePopularSneakers,
            dislikeKobeSneaker,
            dislikePopularSneakers,
            dislikePublicSneakers,
            likePublicSneakers,
            kobeSneakers,
            jordanSneakers,
            likeJordanSneaker,
            dislikeJordanSneaker

        }}>
            {children}

        </SneakerContext.Provider>
    )


    
}


export default SneakerProvider