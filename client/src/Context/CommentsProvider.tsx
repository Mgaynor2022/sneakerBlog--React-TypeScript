import React, { createContext, useContext, useState } from "react";
import { CommentContextType, Comments } from "../Types/Types";
import axios from "axios"


const CommentDefault: CommentContextType = {
    handleChange: () => { },
    commentInput: {
        username: '',
        comment: ''
    },
    handleTextArea: () => { },
    handleSubmit: () => { },
    handleDelete: () => { },
    addComment: () => { },
    getComments: () => { },
    comments: [],
     sneakerId: "" ,
     _id: '',
     commentButton: () => {},
     currentId:''

}
export const CommentsContext = createContext(CommentDefault)

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


type ContextProviderProps = {
    children: React.ReactNode
}

const CommentsProvider = ({children} : ContextProviderProps) => {
    
    const [comments, setComments] = useState<Comments[]>([]);

    const [commentInput, setCommentInput] = useState({
        username: '',
        comment: ''
    })

    const [currentId, setCurrentId] = useState<string | null>(null)

    const commentButton = (sneakerId: string) => {
        setCurrentId(
          currentId === sneakerId ? null : sneakerId
        )
       }


    const getComments = (sneakerId: string) => {
        const url: string = `/local/api/userComment/${sneakerId}`
        userAxios.get(url)
        .then(res => setComments(res.data))
        .catch(err => console.log(err))
        
    }

    const handleChange = (e: React.ChangeEvent <HTMLInputElement>) => {
        setCommentInput((prevInput) =>({
            ...prevInput,
            [e.target.name] : e.target.value
        }))
    }
    const handleTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>)=> {
        setCommentInput((prevInput) =>({
            ...prevInput,
            [e.target.name] : e.target.value
        }))
    }


    const addComment = (sneakerId: string, info: string): void => {
        const url: string = `/local/api/userComment/${sneakerId}`
        userAxios.post(url, info)
        .then(res => setComments(res.data))
        .catch(err => console.log(err))
    }

    // const deleteComment = (commentId: string): void => {
    //     const url: string = `/local/api/userComment/${commentId}`;
    //     userAxios.delete(url, { data: commentId })
    //         .then(res => {
        
    //         setComments(prev => prev.filter(data => data._id !== commentId));
    //         });
    //     };


    // // Submits the comment to the Comment APi 
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement> ,sneakerId: string, info: string): void => {
    //     e.preventDefault()
    //     addComment(sneakerId, info)
       
    // }
    // const handleDelete = (commentId :string): void => {
    //     deleteComment(commentId)
    // }

    return (
        <CommentsContext.Provider
            value={{
                commentInput,
                // setCommentInput,
                handleChange,
                // handleSubmit,
                // handleDelete,
                handleTextArea,
                addComment,
                getComments,
                comments,
                commentButton,
                currentId
                
            }}> 
            {children}
        </CommentsContext.Provider>

    )
}
export default CommentsProvider