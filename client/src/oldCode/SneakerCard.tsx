import React, { useState } from 'react'
import { Sneakers } from '../Components/Types'



const SneakerCard = (props: Sneakers) => {

    const {
        addComment,
        image,
        name,
        release_date,
        brand,
        category,
        handleChange,
        commentInput
    } = props

    const [toggleComment, setToggleComment] = useState<boolean>(false)
     
    const changeToggle = () =>{
        setToggleComment(prevToggle => !prevToggle)
    }

   

    const [toggleViewComment, setToggleViewComment] = useState<boolean>(false)

    const changeView = () =>{
        setToggleViewComment( ! changeView)
    }

    console.log(commentInput.UserComment)
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <img className="rounded-t-lg" src={image} alt="sneakerImage" />

        <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{name} {release_date}</h5>
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 ">{brand}</h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{category}</h5>
            <div className=''>
                { !toggleComment ? 
                    <button onClick={changeToggle}
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-primary-200 ">
                        Post A comment
                    </button>

                    :

                    <div className="max-w-2xl mx-auto px-4">
         <form className="mb-6" onSubmit={() => addComment}>
             <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                 <label className="sr-only">Your comment</label>
                 <textarea
                     name='UserComment'
                    //  value={commentInput.UserComment}
                     onChange={() => handleChange}
                     className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
                     placeholder="Write a comment..." required>
                 </textarea>
             </div>
             <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-primary-200 ">
                 Post comment
             </button>
                    <button onClick={changeToggle}
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-primary-200 ">
                    Close comment
                    </button>
         </form>
         
 </div> 
      }
         </div>
    </div>
    
</div> 
    )

}

export default SneakerCard
