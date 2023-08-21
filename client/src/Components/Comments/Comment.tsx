import { Comments } from "../../Types/Types";
import moment from "moment";
import { TiDelete } from 'react-icons/ti'


const Comment = (props:Comments) => {

    const {
        username,
        timestamp,
        comment,
        handleDelete,
        commentId,
        user,
        userId,
    
    } = props
    


    const formattedTime = moment(timestamp).fromNow()
    const firstLetterOfUserName = username && username.charAt(0)
   

    return (
        <>
            {user._id !== userId ? 
            
            <div className="flex justify-center relative top-5">
            <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <div className="relative flex gap-4 ">
                    <p className="relative -top-8 -mb-4 w-14 h-14 bg-yellow-500  rounded-full text-2xl capitalize">{firstLetterOfUserName}</p>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                        <p className="text-gray-400 text-sm">posted {formattedTime}</p>
                        </div>
                    </div>
                </div>
                <p className="-mt-4 text-gray-500">{comment}</p>
            </div>
            </div>
            
            : 

            <div className="flex justify-center relative top-5">
                <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                    <div className="relative flex gap-4 ">
                        <p className="relative -top-8 -mb-4 w-14 h-14 bg-yellow-500  rounded-full text-2xl capitalize">{firstLetterOfUserName}</p>
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row justify-between">
                            <p className="text-gray-400 text-sm">posted {formattedTime}</p>
                            </div>
                        </div>
                    </div>
                    <p className="-mt-4 text-gray-500">{comment}</p>
                    <TiDelete className="text-red-500" size='1.5rem' cursor="pointer" onClick={() => handleDelete(commentId)}/>
                </div>
                </div>
            }
        </>


    )
}



export default Comment