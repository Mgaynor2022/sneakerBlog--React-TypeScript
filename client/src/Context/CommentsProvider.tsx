import React, { createContext, useContext, useState } from "react";
import { CommentContextType, Comments } from "../Components/Types";
import { UserContext } from "./UserProvider";

const CommentDefault: CommentContextType = {
   handleChange: () => {},
   commentInput: {
    username: '',
    UserComment: ''
   },
   handleSubmit: () => {},
   handleDelete: () => {}
}
export const CommentsContext = createContext(CommentDefault)


type ContextProviderProps = {
    children: React.ReactNode
}

const CommentsProvider = ({children} : ContextProviderProps) => {

    const {
        addComment,
        deleteComment,
        getComments,
        comments
        
    } = useContext(UserContext)

    const [commentInput, setCommentInput] = useState({
        username: '',
        UserComment: ''
    })

    // const handleChange = (e: React.ChangeEvent <HTMLInputElement>) => {
    //     setCommentInput({
    //         ...commentInput,
    //         [e.target.name] : [e.target.value]
    // })
    // }
    const handleChange = (e: React.ChangeEvent <HTMLInputElement>) => {
        setCommentInput((prevInput) =>({
            ...prevInput,
            [e.target.name] : e.target.value
        }))
    }
    // Submits the comment to the Comment APi 
    const handleSubmit = (info: string) => {
        addComment(info)
       
    }
    const handleDelete = (commentId :string): void => {
        deleteComment(commentId)
    }

    return (
        <CommentsContext.Provider
            value={{
                commentInput,
                handleChange,
                handleSubmit,
                handleDelete
            }}> 
            {children}
        </CommentsContext.Provider>

    )
}
export default CommentsProvider