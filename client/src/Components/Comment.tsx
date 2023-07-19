import { Comments } from "./Types";
import moment from "moment";

const Comment = (props:Comments) => {

    const {
        username,
        timestamp,
        comment
    } = props

    const formattedTime = moment(timestamp).fromNow()

    return (
        <div>
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
        </div>


    )
}


export default Comment