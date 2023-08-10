import { Kobe } from "../../Types/Types";
import {LiaComments} from 'react-icons/lia'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'



const Card = (props:Kobe) => {

    const {
        _id,
        image,
        brand,
        releaseDate,
        name,
        story,
        retailPrice, 
        likeKobeSneaker,
        dislikeKobeSneaker, 
        upvotes,
        commentButton,
        commentsLength
    } = props

    // const { kobeSneakers } = useContext<UserContextType>(UserContext)

    const displayLength = commentsLength(_id)


    return (
        <>
            <div className="flex flex-col justify-center relative">  
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-4xl mx-auto ">

                    <div className="w-full md:w-1/3  grid place-items-center">
                        <img src={image} alt="sneakerImg" className="rounded-xl" />
                    </div> 
                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                        <h3 className="capitalize font-black text-gray-800 md:text-3xl text-xl">{name}</h3>

                        <div className=" flex justify-center font-black text-gray-800 md:text-xl text-lg ">
                            <p className="capitalize md:block">{brand}</p>
                            <p className=" ml-5 mr-5 md:block">{releaseDate}</p>
                            <p className="text-xl font-black text-gray-800">${retailPrice}</p>
                        </div>
        
                        <p id='limited-text' className="md:text-lg text-gray-500 text-base">{story}</p>
                            <div className="flex items-center justify-end " >
                                <span>{displayLength}</span>
                                {/* <span>{comments.length}</span> */}
                                 <LiaComments className='mr-5' cursor="pointer" size='1.5rem' onClick={() => commentButton(_id)}/>
                                
                                <span>{upvotes.length}</span>
                                <AiOutlineLike cursor="pointer" size='1.5rem' onClick={() => likeKobeSneaker(_id)} />
                                <AiOutlineDislike className='ml-2' cursor="pointer" size='1.5rem' onClick={() => dislikeKobeSneaker(_id)} /> 
                            </div>
                    </div>
                    </div>
                    
                </div>
              
        </>

    )


}

export default Card