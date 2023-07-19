import React, { useContext } from "react";
import { CommentContextType, Comments } from "./Types";
import CommentDisplay from "./CommentDisplay";
import { CommentsContext } from "../Context/CommentsProvider";




const CommentForm: React.FC = () => {

    const { 
        commentInput,
        handleChange,
        handleTextArea,
        handleSubmit,
        addComment,
        sneakerId
      } = useContext<CommentContextType>(CommentsContext)

   return (
    <>

    <form className="flex flex-col items-center" 
        onSubmit={(e: React.FormEvent<HTMLFormElement>, info: string) => handleSubmit(e,info)}>

        <label className="block mb-2 text-sm font-medium text-gray-900">Username</label>
        <input className="border border-black p-1.5 w-1/3 text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-blue-500 focus:border-blue-500  "
        name="username"
        value={commentInput.username}
        onChange={handleChange} />

        <label className="block mb-2 text-sm font-medium text-gray-900">Your Comment</label>
        <textarea className="border border-black p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-blue-500 focus:border-blue-500"
        name="comment"
        value={commentInput.comment}
        onChange={handleTextArea} />

        <button className="mt-5 px-5 py-2 bg-red-500 text-white font-semibold hover:bg-gray-700">Post Comment</button>
    </form>
    
    
    </>
    
   )

}

export default CommentForm