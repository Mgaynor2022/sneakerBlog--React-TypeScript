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
    const firstLetterOfUserName: string = username.slice(0,1)
    const date = new Date(timestamp)
    let dateMDY = `${date.getMonth()}-${date.getDate()-  + 1}-${date.getFullYear()}`

    
    return (
        <>
            {user._id !== userId ? 
            
            <div className="relative grid grid-cols-1 gap-4 p-3 mb-8 border  bg-white md:space-y-0 rounded-xl shadow-lg  max-w-xs md:max-w-3xl mx-auto">
            <div className="relative flex gap-4">
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                    <p className="relative text-xl whitespace-nowrap truncate ">{firstLetterOfUserName}</p>
                </div>
                <p className="text-gray-400 text-sm">{formattedTime}</p>
            </div>
        </div>
        <p className="-mt-4 text-gray-500">{comment} </p>
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