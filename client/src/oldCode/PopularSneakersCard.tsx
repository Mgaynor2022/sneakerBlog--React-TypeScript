import React, { ReactNode, useState } from 'react'
import {LiaComments} from 'react-icons/lia'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import { Sneakers } from '../Components/Types'


const PopularSneakersCard = (props:Sneakers): any => {

    const {
        addComment,
        image,
        name,
        release_date,
        brand,
        category,
        description,
        price
    } = props

    const [viewCard, setViewCard] = useState(false)

    const toggleCard = () => {
        setViewCard(prevState => !prevState)
    }

    return (
        <div>
            {viewCard ?
            <div className="flex flex-col justify-center">  
	        <div onClick={toggleCard} className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">

		        <div className="w-full md:w-1/3 bg-white grid place-items-center">
			        <img src={image} alt="sneakerImg" className="rounded-xl" />
                </div> 
			    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				    <div className="flex justify-between item-center">
					    <p className="capitalize text-gray-500 font-medium hidden md:block">{brand}</p>
                        <p className=" text-gray-500 font-medium hidden md:block">{release_date}</p>

					<div className="flex items-center">
						<LiaComments size='1.5rem' />
                        <AiOutlineDislike size='1.5rem' />
                        <AiOutlineDislike size='1.5rem' />
					</div>
				</div>
    
				<h3 className="capitalize font-black text-gray-800 md:text-3xl text-xl">{name}</h3>
				<p id='limited-text' className="md:text-lg text-gray-500 text-base">{description}</p>
                <p className="text-gray-600 font-bold text-sm ml-1">{release_date}</p>
				<p className="text-xl font-black text-gray-800">${price}</p>
			</div>
		    </div>
	    </div>


                :
                
                <div id='slide' onClick={toggleCard} className="flex justify-evenly h-64 w-64 items-center p-15 transform hover:scale-110 duration-500">
                    <img className="w-full transform hover:scale-150 " src={image} />
                </div>
            
           
             }

        </div>
    )

}

export default PopularSneakersCard