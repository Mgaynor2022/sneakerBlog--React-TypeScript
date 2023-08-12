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
    console.log(user._id)

    return (
        <div>
            {user._id !== userId ? 
            
            <div className="relative grid grid-cols-1 gap-4 p-3 mb-8 border  bg-white md:space-y-0 rounded-xl shadow-lg  max-w-xs md:max-w-3xl mx-auto">
            <div className="relative flex gap-4">
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                    <p className="relative text-xl whitespace-nowrap truncate ">{username}</p>
                </div>
                <p className="text-gray-400 text-sm">{formattedTime}</p>
            </div>
        </div>
        <p className="-mt-4 text-gray-500">{comment} </p>
        </div>
            
            : 

            <div className="relative grid grid-cols-1 gap-4 p-3 mb-8 border  bg-white md:space-y-0 rounded-xl shadow-lg  w-72 md:max-w-3xl mx-auto">
                <div className="relative flex gap-4">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                        <p className="relative text-xl whitespace-nowrap truncate ">{username}</p>
                    </div>
                    <p className="text-gray-400 text-sm">{formattedTime}</p>
                </div>
            </div>
            <p className="-mt-4 text-gray-500">{comment} </p>
                <TiDelete className="text-red-500" size='1.5rem' onClick={() => handleDelete(commentId)}/>
            </div>         
            }
        </div>


    )
}


export default Comment