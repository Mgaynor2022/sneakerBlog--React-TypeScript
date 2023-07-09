// import React, { useContext, useState } from "react";
// import UserProvider from "../Context/UserProvider";
// import { CommentsContext } from "../Context/CommentsProvider";


// const CommentForm: React.FC = () => {

//     const {handleChange, handleSubmit, comments, handleDelete} = useContext(CommentsContext)


//     // const [userComments, SetUserComments] = useState <Comments[]> ([])
   
//     return(
//         <div className="max-w-2xl mx-auto px-4">
//             <form className="mb-6" onSubmit={handleSubmit}>
//                 <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
//                     <label className="sr-only">Your comment</label>
//                     <textarea id="comment" onChange={handleChange}
//                         className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
//                         placeholder="Write a comment..." required>
//                     </textarea>
//                 </div>
//                 <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 ">
//                     Post comment
//                 </button>
//             </form>
//     </div> 
//     )
// }
// export default CommentForm