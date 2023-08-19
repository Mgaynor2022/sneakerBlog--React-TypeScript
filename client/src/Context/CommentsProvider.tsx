import React, { createContext, useState } from "react";
import { CommentContextType, Comments } from "../Types/Types";
import axios from "axios"


const CommentDefault: CommentContextType = {
    handleChange: () => { },
    commentInput: {
        username: '',
        comment: ''
    },
    handleTextArea: () => { },
    handleDelete: () => { },
    addComment: () => { },
    getComments: () => { },
    comments: [],
    commentButton: () => { },
    currentId: '',
    commentsLength: () => { },
    getAllComments: () => {}
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

    function commentsLength( sneakerId: string): number {
        return comments.filter(comment => comment.sneakerId === sneakerId).length;
      }

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

    const getAllComments = () => {
        const url: string = "/local/api/userComment"
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

    const resetForm = () => {
        setCommentInput({
            comment: '',
            username: ""
        })
    }

// sneaker id will be the current id 
    const addComment = (sneakerId: string, info: object): void => {
        const url: string = `/local/api/userComment/${sneakerId}`
        userAxios.post(url, info)
        .then(res => setComments(prev => [...prev, res.data]))
        .catch(err => console.log(err))
        resetForm()
        getComments(sneakerId)
    }


    // update code to say if userId = user then allow the delete function
    const handleDelete = (commentId: string): void => {
        const url: string = `/local/api/userComment/${commentId}`;
        userAxios.delete(url)
            .then(_res  => {
        
            setComments(prev => prev.filter(comment => comment._id !== commentId));
            })
            .catch(err => console.log(err))
        };

    return (
        <CommentsContext.Provider
            value={{
                commentInput,
                handleChange,
                handleDelete,
                handleTextArea,
                addComment,
                getComments,
                comments,
                commentButton,
                currentId,
                commentsLength,
                getAllComments,
                
            }}> 
            {children}
        </CommentsContext.Provider>

    )
}
export default CommentsProvider