import { CommentsForm } from "../../Types/Types";

const CommentForm = (props: CommentsForm) => {

 const   {
        commentInput,
        handleTextArea,
        addComment,
        sneakerId,
        

    } = props


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addComment(sneakerId, commentInput)
        console.log("Added To Database.......", commentInput)
        
    }

   return (
    <>

    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <textarea className="border mt-10 border-black p-2.5 w-72 md:w-96 h-24 text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-blue-500 focus:border-blue-500"
        name="comment"
        placeholder="Type Your Comment"
        value={commentInput.comment}
        onChange={handleTextArea} />

        <button className=" my-5 px-5 py-2 bg-red-500 text-white font-semibold hover:bg-gray-700">Post Comment</button>
    </form>
    
    
    </>
    
   )

}

export default CommentForm